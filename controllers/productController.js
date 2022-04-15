import Product from '../models/productModel.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, CustomAPIError } from '../errors/index.js'

const createProduct = async (req, res) => {
  const { category } = req.body.category
  if (category === 'DVD') {
    const { size, sku, name, price, select } = req.body.dvd
    if (!sku || !name || !price || !size) {
      throw new BadRequestError('Please provide all values')
    }
    if (category === 'Book') {
      const { weight, sku, name, price, select } = req.body.book
      if (!sku || !name || !price || !weight) {
        throw new BadRequestError('Please provide all values')
      }
    }
    if (category === 'Furniture') {
      const { height, width, length, sku, name, price, select } =
        req.body.furniture
      if (!sku || !name || !price || !height || !width || !length) {
        throw new BadRequestError('Please provide all values')
      }
    }

    const product = await Product.create(req.body)
    console.log(product)
    res.status(StatusCodes.CREATED).json({ product })
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
  res.status(200).json({ msg: 'Success! Job removed' })
}

export { createProduct, getAllProducts, deleteProduct }
