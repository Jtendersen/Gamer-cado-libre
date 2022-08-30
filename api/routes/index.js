const express = require("express");
const users = require("./users.js");
const products = require("./products.js");
const carts = require("./carts.js");
const auth = require("./auth.js");
const genres = require("./genres");
const orders = require("./orders");
const reviews = require("./reviews");
const gamefinder = require("./gamefinder");

const router = express.Router();

router.use("/genres", genres);
router.use("/users", users);
router.use("/auth", auth);
router.use("/products", products);
router.use("/cart", carts);
router.use("/order", orders);
router.use("/gamefinder", gamefinder);
router.use("/reviews", reviews)

module.exports = router;
