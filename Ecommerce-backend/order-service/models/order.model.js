import mongoose  from "mongoose";

const orderSchema = new mongoose.Schema({
    status:
    {
        type:String,
        enum:["dispatch","delivered","on-way"],
        default:"dispatch"
    },
    address:
    {
        name:{
            type:String,
            required:true,
        },
        phoneNo:{
            type:Number,
            required:true, 
        },
        pincode:{
            type:Number,
            required:true
        },
        city:{
            type:String,
            required:true,
        }
    },
    userId:
    {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
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