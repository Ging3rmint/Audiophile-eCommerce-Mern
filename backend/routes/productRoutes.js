import express from "express";
import {
  getAllProducts,
  getAllProductsByQuery,
  getOneProductByQuery,
} from "../controllers/productController.js";

const router = express.Router();
router.route("/").get(getAllProducts);
router.route("/one").get(getOneProductByQuery);
router.route("/all").get(getAllProductsByQuery);

export default router;
