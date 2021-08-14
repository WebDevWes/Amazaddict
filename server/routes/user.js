import express from 'express'
import { getUser, login, register } from '../controller/user.js'
import { authenticate } from '../middleware/authMiddleware.js'

// Initialize express router
const router = express.Router()

// Route to fetch all products
router.post('/', register)
router.get('/getuser', authenticate, getUser)
router.post('/login', login)

// Route to fetch single product by id from params
// router.get('/:id', getProductById)

export default router
