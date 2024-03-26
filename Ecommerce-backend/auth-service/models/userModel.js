import mongoose from "mongoose";

const userSchema =  mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique:true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "vendor", "admin"],
    default: "user",
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  isRegistered:{
    type:String,
    default:"pending",
  },
  
});

export const userModel = mongoose.model("users", userSchema);
