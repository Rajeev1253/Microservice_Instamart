import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  update,
  updateSingle,
} from "../controller/user.controller.js";
const router = express.Router();
router.post("/", createUser);
router.get("/", getAllUser);
router.get("/:id",getUser)
router.put("/:id", update);
router.patch("/:id", updateSingle);
router.delete("/:id", deleteUser);
export default router;
