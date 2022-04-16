import Product from '../models/productModel.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, CustomAPIError } from '../errors/index.js'

const createProduct = async (req, res) => {
  const { category, height, width, length, sku, name, price, weight, size } =
    req.body

  const product = await Product.create({
    sku,
    name,
    price,
    category,
    weight,
    size,
    dimensions: { height, width, length },
  })
  console.log(product)
  res.status(StatusCodes.CREATED).json({ product })
}

const getAllProducts = async (req, res) => {
  const products = await Product.find({})
  res
    .status(200)
    .json({ products, totalProducts: products.length, numOfPages: 1 })
}
const deleteProduct = async (req, res) => {
  await Product.deleteMany({
    _id: { $in: req.params.ids.split(',') },
  })
  res.status(200).json({ msg: 'Success! Job removed' })
}

export { createProduct, getAllProducts, deleteProduct }
