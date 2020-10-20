import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import products from "./products.js";

const app = express();

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3001;

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
