import asyncHandler from 'express-async-handler'
import Product from '../models/Product.js'

// Function to get products from database
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// Function to get single product from database
export const getProductById = asyncHandler(async (req, res) => {
  const item = await Product.findById(req.params.id)
  if (item) {
    res.json(item)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
