import express from 'express'
import { login } from '../controller/user.js'

// Initialize express router
const router = express.Router()

// Route to fetch all products
router.post('/login', login)

// Route to fetch single product by id from params
// router.get('/:id', getProductById)

export default router
