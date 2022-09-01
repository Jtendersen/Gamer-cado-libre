const express = require("express");
const { historial, postOrder } = require("../Controllers/ordersController");
const { validateAuth } = require("../middlewares/auth");

const router = express.Router();

// Ruta para cuando el cliente confirma un pedido.
router.post("/", validateAuth, postOrder);

//ruta para historial de ordenes
router.get("/", validateAuth, historial);

module.exports = router;
