import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connection.js'
import products from './routes/product.js'

dotenv.config() || 3001

connectDB()

const app = express()

const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send("You hit the '/' endpoint, nothing to see here")
})

app.use('/api/products', products)

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)
