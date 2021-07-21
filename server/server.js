import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'

dotenv.config() || 3001

const app = express()

const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send("You hit the '/' endpoint, nothing to see here")
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const item = products.find((product) => product._id === req.params.id)
  res.json(item)
})

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)
