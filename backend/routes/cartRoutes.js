import express from "express";
const router = express.Router();
import { setCart, getCart } from "../controllers/cartController.js";

router.route("/").post(setCart).get(getCart);

export default router;
