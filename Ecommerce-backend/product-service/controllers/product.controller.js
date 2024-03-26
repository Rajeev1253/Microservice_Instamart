import { errorHandler } from "../../user-service/lib/utils.js";
import { productService } from "../service/product.service.js";
export const createProduct = async (req, res) => {
  try {
    console.log("dasgdjk")
    const response = await productService.createProduct(req);
    return res.status(201).send({
      success: true,
      message: "product created successfully",
      users: response,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const response = await userService.getAllProduct(req);
    return res.status(200).send({
      success: true,
      message: "user fetch successfully",
      users: response,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};
export const getUser = async (req, res) => {
  try {
    const response = await userService.getUser(req);
    return res.status(200).send({
      success: true,
      message: "user fetch successfully",
      users: response,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};
export const update = async (req, res) => {
  try {
    const response = await userService.update(req);
    return res.status(200).send({
      success: true,
      message: "user updated successfully",
      users: response,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};
export const updateSingle = async (req, res) => {
  try {
    const response = await userService.update(req);
    return res.status(200).send({
      success: true,
      message: "user updated successfully",
      users: response,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};
export const deleteUser = async (req, res) => {
  try {
    const response = await userService.deleteUser(req);
    return res.status(200).send({
      success: true,
      message: "user deleted successfully",
      users: response,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};
const userController = {
  createProduct,
  getUser,
  update,
  deleteUser,
  updateSingle,

};

export default userController;
