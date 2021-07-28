import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connection.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import products from './routes/product.js'

// Initialize environment Variable
dotenv.config()
// Connect to MongoDB
connectDB()

const app = express()

const PORT = process.env.PORT

// Home Route "/"
app.get('/', (req, res) => {
  res.send("You hit the '/' endpoint, nothing to see here")
})

// Product routes "/api/products" || "/api/products/:id"
app.use('/api/products', products)

// Error Handling Middleware
app.use(notFound)
app.use(errorHandler)

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)
