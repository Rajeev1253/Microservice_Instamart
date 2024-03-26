import { v4 as uuid_v4 } from "uuid"
import { productModel } from '../models/productModel.js';
import { orderModel } from "../models/order.Model.js";
import Producer from "../worker/producer.js";
const producer = new Producer();
export const createOrder = async(req)=>{
  try{
    const {productId,stock} = req.body;

    if (!productId) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "productId is required",
        });
      }
      if (!stock) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "quantity is required",
        });
      }

      const product= await productModel.find({_id:productId});
      const [{quantity,title}] = product
      if(quantity<stock){
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "quantity is more than stock required",
        });
        
      }
      const uid =  uuid_v4();

      const order = await orderModel.create(
       {
        uid,
        products:productId,

       }

      )
      const signature = process.env.RABBIT_ORDER_REGISTER_SIGNATURE
      const routingKey = "order"
      const msg ={
        productId,
        stock,
        title
      }
      await producer.publishMessage(routingKey,msg,signature);
      console.log("orderPublished",msg)
     
      return order



  }
  catch(error){
    throw(error)
  }
    


}
export const orderService ={
    createOrder
}