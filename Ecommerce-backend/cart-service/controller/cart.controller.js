import { cartService } from "../services/cart.service.js";

export const addToCart = async (req, res) => {
  try {
    console.log("dasgdjk")
    const response = await cartService.addToCart(req);
    return res.status(201).send({
      success: true,
      message: "product added to cart ",
      users: response,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const getCartItem = async (req, res) => {
  try {
    const response = await cartService.getCartItem(req);
    return res.status(200).send({
      success: true,
      message: "all products in cart fetch successfully",
      users: response,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const updateCart = async (req, res) => {
  try {
    const response = await cartService.updateCartItem(req);
    return res.status(200).send({
      success: true,
      message: "carrt updated successfully",
      users: response,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const deleteItem = async (req, res) => {
  try {
    const response = await cartService.deleteItem(req);
    return res.status(200).send({
      success: true,
      message: "item removed from cart successfully",
      users: response,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};
const cartController = {
    addToCart,
    deleteItem,
    updateCart,
    getCartItem,
  
};

export default  cartController;
