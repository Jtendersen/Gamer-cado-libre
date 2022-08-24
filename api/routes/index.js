const express = require("express");
const users = require("./users.js");
const products = require("./products.js");
const carts = require("./carts.js");
const router = express.Router();
router.use("/users", users);
router.use("/products", products);
router.use("/cart", carts);

module.exports = router;
