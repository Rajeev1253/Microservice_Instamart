
import { orderService } from "../service/order.service.js";


export const createOrder = async (req, res) => {
  try {
    const response = await orderService.createOrder(req);
    return res.status(201).send({
      success: true,
      message: "order created successfully",
      order: response,
    });
  } catch (error) {
  }
};

const orderController = {
  createOrder,
};

export default orderController;
