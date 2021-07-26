import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/Product.js'

// Initialize express router
const router = express.Router()

// Route to fetch all products
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

// Route to fetch single product by id from params
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const item = await Product.findById(req.params.id)
    if (item) {
      res.json(item)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default router
