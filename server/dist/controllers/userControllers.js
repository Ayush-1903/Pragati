var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";
import { UserModel } from "../models/userModel.js";
var createToken = function (_id, email) {
    return jwt.sign({ _id: _id, email: email }, process.env.SECRET_STRING, { expiresIn: "1d" });
};
export var signup = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstName, lastName, email, password, isSchoolStudent, emailExists, salt, hash, user, token, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password, isSchoolStudent = _a.isSchoolStudent;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                if (!email || !password) {
                    return [2 /*return*/, res.status(400).json({ message: "all fields must be filled" })];
                }
                if (!validator.isEmail(email)) {
                    return [2 /*return*/, res.status(400).json({ message: "valid email nahi hai" })];
                }
                return [4 /*yield*/, UserModel.findOne({ email: email })];
            case 2:
                emailExists = _b.sent();
                if (emailExists) {
                    return [2 /*return*/, res.status(400).json({ message: "email already in use" })];
                }
                if (!validator.isStrongPassword(password)) {
                    return [2 /*return*/, res.status(400).json({ message: "password is not strong" })];
                }
                return [4 /*yield*/, bcrypt.genSalt(10)];
            case 3:
                salt = _b.sent();
                return [4 /*yield*/, bcrypt.hash(password, salt)];
            case 4:
                hash = _b.sent();
                return [4 /*yield*/, UserModel.create({
                        isSchoolStudent: isSchoolStudent,
                        email: email,
                        password: hash,
                        name: "".concat(firstName, " ").concat(lastName),
                    })];
            case 5:
                user = _b.sent();
                token = createToken(user._id, user.email);
                res.status(200).json({ user: user, token: token });
                return [3 /*break*/, 7];
            case 6:
                err_1 = _b.sent();
                res.status(400).json({ message: err_1.message });
                console.log(err_1);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
export var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, isPasswordCorrect, token, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, UserModel.findOne({ email: email })];
            case 2:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, res.status(400).json({ message: "email not found" })];
                }
                return [4 /*yield*/, bcrypt.compare(password, user.password)];
            case 3:
                isPasswordCorrect = _b.sent();
                if (!isPasswordCorrect) {
                    return [2 /*return*/, res.status(400).json({ message: "Incorrect Password" })];
                }
                token = createToken(user._id, user.email);
                res.status(200).json({ user: user, token: token });
                return [3 /*break*/, 5];
            case 4:
                err_2 = _b.sent();
                res.status(400).json({ message: err_2 });
                console.log(err_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
