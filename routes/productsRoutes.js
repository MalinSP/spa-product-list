import express from "express";
const router = express.Router();
import {
  createProduct,
  getAllProducts,
  deleteProduct,
} from "../controllers/productController.js";

router.route("/add-product").post(createProduct);
router.route("/").get(getAllProducts);
router.route("/:ids").delete(deleteProduct);

export default router;
