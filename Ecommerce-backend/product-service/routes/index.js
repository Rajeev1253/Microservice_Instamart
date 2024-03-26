import express from "express";
const router = express.Router();
import productRoutes from "./product.routes.js"
import orderRoutes from "./order.Routes.js"

router.use("/product",productRoutes)
router.use("/order",orderRoutes)
export default router;
