import { Schema, model } from "mongoose";

export const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

export const userModel = model("User", userSchema);

