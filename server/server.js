import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connection.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import products from './routes/product.js'
import users from './routes/user.js'

// Initialize environment Variable
dotenv.config()
// Connect to MongoDB
connectDB()

const app = express()
app.use(express.json())

const PORT = process.env.PORT

// Home Route "/"
app.get('/', (req, res) => {
  res.send("You hit the '/' endpoint, nothing to see here")
})

// Product routes "/api/products" || "/api/products/:id"
app.use('/api/products', products)

// Product routes "/api/users"
app.use('/api/users', users)

// Error Handling Middleware
app.use(notFound)
app.use(errorHandler)

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)
