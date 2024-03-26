import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    },
    images: [
        {
          public_id: {
            type: String,
            default:""
            // required: true,
          },
          url: {
            type: String,
            default:""
            // required: true,
          },
        },
      ],
    category: {
        type: String,
        required:true
        // required: [true, "Please Enter Product Category"],
      },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      

    
},{timestamps:true})

export const productModel = new mongoose.model("product",productSchema)