import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";
import { UserModel } from "../models/userModel.js";

// type ReqResType = {
//   req: Request;
//   res: Response;
// };
type CreateTokenType = {
  _id: string;
  email: string;
};

const createToken = ({ _id, email }: CreateTokenType) => {
  return jwt.sign({ _id, email }, process.env.SECRET_STRING, { expiresIn: "1d" });
};

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
