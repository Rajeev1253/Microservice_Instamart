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
    enum: ["User", "vendor", "Admin"],
    default: "user",
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  isRegistered:{
    type:String,
    enum: ["pending","registered"],
    default:"pending"
  },
  
});

export const userModel = mongoose.model("users", userSchema);
