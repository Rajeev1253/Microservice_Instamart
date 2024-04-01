import { orderService } from "../service/order.service.js";
export const createOrder = async (message) => {
    // const {userDetails = {}} = payload
    console.log("message",message)
    try {
      const response = await orderService.createOrder(message)
      if (!response) {
        throw new Error('User could not be created.');
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const orderProcessor ={
    createOrder
  }
  export default orderProcessor;    