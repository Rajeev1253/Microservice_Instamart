import { errorHandler } from "../lib/utils.js";
import { userService } from "../service/user.service.js";

export const createUser = async (req, res) => {
  try {
    console.log("dasgdjk")
    const response = await userService.createUser(req);
    return res.status(201).send({
      success: true,
      message: "user created successfully",
      users: response,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const response = await userService.getAllUser(req);
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
  createUser,
  getUser,
  update,
  deleteUser,
  updateSingle,
  getAllUser,
};

export default userController;
