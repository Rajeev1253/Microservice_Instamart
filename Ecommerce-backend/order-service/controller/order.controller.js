import { orderService } from "../services/order.service";
export const createOrder = async (req, res) => {
  try {
    const response = await orderService.addToCart(req);
    return res.status(201).send({
      success: true,
      message: "ordered successfully",
      users: response,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const getOrder = async (req, res) => {
  try {
    const response = await orderService.getOrder(req);
    return res.status(200).send({
      success: true,
      message: "all order fetch sucessfully",
      users: response,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const updateOrder = async (req, res) => {
  try {
    const response = await orderService.updateOrder(req);
    return res.status(200).send({
      success: true,
      message: "order updated successfully",
      users: response,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const response = await orderService.deleteOrder(req);
    return res.status(200).send({
      success: true,
      message: "order removed  successfully",
      users: response,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};
const orderController = {
    createOrder,
    getOrder,
    deleteOrder,
    updateOrder
  
};

export default  orderController;
