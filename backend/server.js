const express = require("express");
const products = require("./products");

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Backend running!");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));
