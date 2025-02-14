const express = require("express");
const Mongo = require("./Mongo.cjs");
const ProductRoutes = require("./ProductRoutes.cjs");
const CartRoutes = require("./CartRoutes.cjs");
const UserRoutes = require("./UserRoutes.cjs");
const app = express();
require("dotenv").config();
app.use(express.json());
Mongo();
app.use("/api/products",ProductRoutes);
app.use("/api/cart",CartRoutes);
app.use("/api/user",UserRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log("Server running at the PORT ",PORT))