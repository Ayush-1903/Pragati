import { Schema, model } from "mongoose";

interface UserSchemaType {
  name: string;
  email: string;
  password: string;
  resetPasswordToken: string;
  resetPasswordTokenExpiresIn: Date;
  isSchoolStudent: boolean;
}

const userSchema = new Schema<UserSchemaType>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  resetPasswordToken: { type: String },
  resetPasswordTokenExpiresIn: { type: Date },
  isSchoolStudent: { type: Boolean, required: true },
});

export const UserModel = model<UserSchemaType>("User", userSchema);
