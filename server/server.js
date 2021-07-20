const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
  res.send("You hit the '/' endpoint")
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const item = products.find((product) => product._id === req.params.id)
  res.json(item)
})

app.listen(3001, console.log('Server running on port 3001'))
