import Product from "../models/productModel.js";

const createProduct = async (req, res) => {
  res.send("create product");
};
const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res
    .status(200)
    .json({ products, totalProducts: products.length, numOfPages: 1 });
};
const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new Error(`No product with ${productId}`);
  }
  await product.remove();
  res.status(200).json({ msg: "Success, product removed" });
};

export { createProduct, getAllProducts, deleteProduct };
