import { errorHandler } from "../lib/utils.js";
import { authService } from "../services/auth.service.js";

export const register = async (req, res) => {
    console.log('req: ', req.body);
  try {
    console.log("dasgdjk")
    const response = await authService.register(req);
    return res.status(201).send({
      success: true,
      message: "user created successfully",
      users: response,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};
export const login = async (req, res) => {
  try {
    const response = await authService.login(req);
    return res.status(200).send({
      success: true,
      message: `Login Sucessfully`,
      user: response.user,
      token: response.token,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};







const authController = {
  register,
  login
 
};

export default authController;
