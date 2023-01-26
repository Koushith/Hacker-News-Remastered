import mongoose from "mongoose";
import { Link } from "./links.model.js";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//Todo - has the password

export const User = mongoose.model("User", userSchema);
