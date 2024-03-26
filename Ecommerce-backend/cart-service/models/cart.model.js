import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
    products:[
        {
            type: mongoose.Schema.ObjectId,
            ref: "products",
            required: true,
        }
    ],
    quantity:{
        type:Number,
        required:true
    },
    userId:{
        type: mongoose.Schema.ObjectId,
            ref: "users",
            required: true,

    }


},{ timestamps: true })

export const cartModel =  mongoose.model("cart",cartSchema)