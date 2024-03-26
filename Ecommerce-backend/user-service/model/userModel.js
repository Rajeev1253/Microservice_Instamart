import mongoose from "mongoose";

const userSchema =  mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
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
  address: {
    city: {
      type: String,
      default:""
    },
    state: {
      type: String,
      default:""
    },
    region: {
      type: String,
      default:""
    },
    zipcode: {
      type: String,
      default:""
    },
  },
  phone: {
    type: String,
    default:""
  },
} ,{ timestamps: true });

export const userModel = mongoose.model("users", userSchema);
