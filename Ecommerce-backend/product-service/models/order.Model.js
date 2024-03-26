import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    uid: { 
        type: String,
        required:true
    },
    status:
    {
        type:String,
        enum:["pending","confirmed"],
        default:"pending"
    },
    products:
    [
        {
            type: mongoose.Schema.ObjectId,
            ref: "products",
            required: true,

        }
    ]
    
},{timestamps:true})

export const orderModel = new mongoose.model("orders",orderSchema)