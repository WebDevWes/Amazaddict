import express from 'express'
import { getProducts, getProductById } from '../controller/product.js'

// Initialize express router
const router = express.Router()

// Route to fetch all products
router.get('/', getProducts)

// Route to fetch single product by id from params
router.get('/:id', getProductById)

export default router
