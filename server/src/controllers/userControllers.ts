import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";
import mg, { ConstructorParams } from "mailgun-js";
import { UserModel } from "../models/userModel.js";

type CreateTokenType = {
  _id: string;
  email: string;
};
interface MailgunConfig {
  apiKey: string;
  domain: string;
}
// ======================
const createToken = ({ _id, email }: CreateTokenType) => {
  return jwt.sign({ _id, email }, process.env.SECRET_STRING, { expiresIn: "1d" });
};

const mailgun = (): mg.Mailgun => {
  const config: ConstructorParams = {
    apiKey: process.env.MAILGUN_API_KEY!, // ! asserts that this is defined and not null or undefined
    domain: process.env.MAILGUN_DOMAIN!,
  };
  return new mg(config);
};

// =======================

export const signup = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, isSchoolStudent } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "all fields must be filled" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "valid email nahi hai" });
    }

    const emailExists = await UserModel.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: "email already in use" });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({ message: "password is not strong" });
    }

    // encrypt password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await UserModel.create({
      isSchoolStudent,
      email,
      password: hash,
      name: `${firstName} ${lastName}`,
    });

    const token = createToken({ _id: user._id.toString(), email: user.email });

    res.status(200).json({ user, token });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
    console.log(err);
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req?.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "email not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    const token = createToken({ _id: user._id.toString(), email: user.email });

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(400).json({ message: err });
    console.log(err);
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user ka astitva nahi" });
    }

    const resetToken = jwt.sign({ _id: user._id }, process.env.SECRET_STRING, {
      expiresIn: "30m",
    });

    const encodedResetToken = encodeURIComponent(resetToken.replace(/\./g, "%2E"));

    user.resetPasswordToken = resetToken;
    user.resetPasswordTokenExpiresIn = new Date(Date.now() + 3600000);

    await user.save();

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
        } else {
          return res.status(200).send({ message: "Email sent successfully" });
        }
      });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
    console.log(err);
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  const { newPassword, encodedResetToken } = req.body;

  if (encodedResetToken) {
    try {
      const decodedToken = decodeURIComponent(encodedResetToken.replace(/%2E/g, "."));

      const decodedData = jwt.verify(decodedToken, process.env.SECRET_STRING) as { _id: string };

      const user = await UserModel.findOne({
        _id: decodedData._id,
        resetPasswordToken: decodedToken,
      });
      if (!user) {
        return res.status(400).json({ message: "Invalid Token or Token Expired" });
      }

      if (
        user.resetPasswordTokenExpiresIn &&
        user.resetPasswordTokenExpiresIn.getTime() < Date.now()
      ) {
        const newToken = jwt.sign({ _id: user._id }, process.env.SECRET_STRING, {
          expiresIn: "30m",
        });
        user.resetPasswordToken = newToken;
        user.resetPasswordTokenExpiresIn = new Date(Date.now() + 3600000);
        await user.save();
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      user.password = hashedPassword;
      user.resetPasswordToken = "";

      await user.save();

      return res.status(200).json({ message: "Password Reset Successful" });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  } else {
    return res.status(400).json({ message: "Something went wrong" });
  }
};
