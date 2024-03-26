import express from "express";
import userRoute from "./user.Routes.js";
const router = express.Router();
router.use("/user", userRoute);
export default router;
