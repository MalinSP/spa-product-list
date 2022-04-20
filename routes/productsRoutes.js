import express from 'express'
const router = express.Router()
import {
  createProduct,
  getAllProducts,
  deleteProduct,
} from '../controllers/productController.js'

router.route('/add-product').post(createProduct)
router.route('/products').get(getAllProducts)
router.route('/products/:ids').delete(deleteProduct)

export default router
