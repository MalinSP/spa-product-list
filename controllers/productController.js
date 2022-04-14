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
  await Product.deleteMany({
    _id: { $in: req.params.ids.split(",") },
  });
  res.status(200).json({ msg: "Success! Job removed" });
};

export { createProduct, getAllProducts, deleteProduct };
