const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Routes
const productRoutes = require("./routes/products.routes");

const app = express();

// Configuraciones
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api/products", productRoutes);

module.exports = app;
