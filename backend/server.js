import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Backend running!");
});

// Fetching from database
app.use("/api/products", productRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
