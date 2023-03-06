import { Schema, model } from "mongoose";

interface UserSchemaType {
    name: string;
    email: string;
    password: string;
    isSchoolStudent: boolean;
}

const userSchema = new Schema<UserSchemaType>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    isSchoolStudent: { type: Boolean, required: true },
});

export const UserModel = model<UserSchemaType>("User", userSchema);
