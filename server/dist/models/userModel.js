import { Schema, model } from "mongoose";
var userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    isSchoolStudent: { type: Boolean, required: true },
});
export var UserModel = model("User", userSchema);
