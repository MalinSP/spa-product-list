import Product from '../models/productModel.js'
import { StatusCodes } from 'http-status-codes'

const createProduct = async (req, res) => {
  const { category, height, width, length, sku, name, price, weight, size } =
    req.body

  const uniqueSKU = await Product.find({
    sku: { $exists: true },
  })
  console.log(uniqueSKU)
  if (!uniqueSKU) {
    const product = await Product.create({
      sku,
      name,
      price,
      category,
      weight,
      size,
      dimensions: { height, width, length },
    })
    res.status(StatusCodes.CREATED).json({ product })
  } else {
    res.status(404).json({ msg: 'product already exist' })
  }
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
  res.status(StatusCodes.OK).json({ msg: 'Success! Job removed' })
}

export { createProduct, getAllProducts, deleteProduct }
