"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.forgotPassword = exports.login = exports.signup = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const validator_1 = __importDefault(require("validator"));
const mailgun_js_1 = __importDefault(require("mailgun-js"));
const userModel_js_1 = require("../models/userModel.js");
// ======================
const createToken = ({ _id, email }) => {
    return jsonwebtoken_1.default.sign({ _id, email }, process.env.SECRET_STRING, { expiresIn: "1d" });
};
const mailgun = () => {
    const config = {
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN,
    };
    return new mailgun_js_1.default(config);
};
// =======================
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password, isSchoolStudent } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "all fields must be filled" });
        }
        if (!validator_1.default.isEmail(email)) {
            return res.status(400).json({ message: "valid email nahi hai" });
        }
        const emailExists = yield userModel_js_1.UserModel.findOne({ email });
        if (emailExists) {
            return res.status(400).json({ message: "email already in use" });
        }
        if (!validator_1.default.isStrongPassword(password)) {
            return res.status(400).json({ message: "password is not strong" });
        }
        // encrypt password
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hash = yield bcryptjs_1.default.hash(password, salt);
        const user = yield userModel_js_1.UserModel.create({
            isSchoolStudent,
            email,
            password: hash,
            name: `${firstName} ${lastName}`,
        });
        const token = createToken({ _id: user._id.toString(), email: user.email });
        res.status(200).json({ user, token });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
        console.log(err);
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req === null || req === void 0 ? void 0 : req.body;
    try {
        const user = yield userModel_js_1.UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "email not found" });
        }
        const isPasswordCorrect = yield bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Incorrect Password" });
        }
        const token = createToken({ _id: user._id.toString(), email: user.email });
        res.status(200).json({ user, token });
    }
    catch (err) {
        res.status(400).json({ message: err });
        console.log(err);
    }
});
exports.login = login;
const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const user = yield userModel_js_1.UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "user ka astitva nahi" });
        }
        const resetToken = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.SECRET_STRING, {
            expiresIn: "30m",
        });
        const encodedResetToken = encodeURIComponent(resetToken.replace(/\./g, "%2E"));
        user.resetPasswordToken = resetToken;
        user.resetPasswordTokenExpiresIn = new Date(Date.now() + 3600000);
        yield user.save();
        const emailInfo = {
            from: process.env.SMTP_USERNAME,
            to: email,
            subject: "Password Reset Link",
            html: `
              <h2>Please click on the following link to reset your password:</h2>
              <p>${process.env.CLIENT_URL}/auth/reset-password/${encodedResetToken}</p>
          `,
        };
        mailgun()
            .messages()
            .send(emailInfo, (err, body) => {
            if (err) {
                console.log(err);
                return res.status(500).send({ message: "Something went wrong while sending email" });
            }
            else {
                return res.status(200).send({ message: "Email sent successfully" });
            }
        });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
        console.log(err);
    }
});
exports.forgotPassword = forgotPassword;
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { newPassword, encodedResetToken } = req.body;
    if (encodedResetToken) {
        try {
            const decodedToken = decodeURIComponent(encodedResetToken.replace(/%2E/g, "."));
            const decodedData = jsonwebtoken_1.default.verify(decodedToken, process.env.SECRET_STRING);
            const user = yield userModel_js_1.UserModel.findOne({
                _id: decodedData._id,
                resetPasswordToken: decodedToken,
            });
            if (!user) {
                return res.status(400).json({ message: "Invalid Token or Token Expired" });
            }
            if (user.resetPasswordTokenExpiresIn &&
                user.resetPasswordTokenExpiresIn.getTime() < Date.now()) {
                const newToken = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.SECRET_STRING, {
                    expiresIn: "30m",
                });
                user.resetPasswordToken = newToken;
                user.resetPasswordTokenExpiresIn = new Date(Date.now() + 3600000);
                yield user.save();
            }
            const salt = yield bcryptjs_1.default.genSalt(10);
            const hashedPassword = yield bcryptjs_1.default.hash(newPassword, salt);
            user.password = hashedPassword;
            user.resetPasswordToken = "";
            yield user.save();
            return res.status(200).json({ message: "Password Reset Successful" });
        }
        catch (err) {
            return res.status(400).json({ message: err.message });
        }
    }
    else {
        return res.status(400).json({ message: "Something went wrong" });
    }
});
exports.resetPassword = resetPassword;
