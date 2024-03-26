import express from "express"
import { addToCart, deleteItem, getCartItem, updateCart } from "../controller/cart.controller.js";
const router = express.Router();

router.post("/",addToCart);
router.get("/",getCartItem);
router.put("/",updateCart);
router.delete("/:id",deleteItem)
export default router;