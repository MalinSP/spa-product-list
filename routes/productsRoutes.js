import express from "express";
const router = express.Router();
import {
  createProduct,
  getAllProducts,
  deleteProduct,
} from "../controllers/productController.js";

router.route("/createProduct").post(createProduct);
router.route("/").get(getAllProducts);
router.route("/:id").delete(deleteProduct);

export default router;
