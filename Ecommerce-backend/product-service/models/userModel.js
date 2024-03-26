import mongoose from "mongoose";
const userSchema  =  new mongoose.Schema({
    name:{
        type:String,
        default:""
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
})

export const userModel = mongoose.model("users", userSchema);