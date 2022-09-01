const express = require("express");
const Cart = require("../models/Carts");
const { Op } = require("sequelize");
const { Product } = require("../models");
const { validateAuth } = require("../middlewares/auth");
const {
  updateProduct,
  deleteItem,
  addProduct,
  getCart,
} = require("../Controllers/cartsController");

const router = express.Router();

// Ruta para visualizar el carrito completo, cuando clickea en el carrito hace este pedido get y el back devuelve todo lo que este en "pending".
router.get("/", validateAuth, getCart);

// Ruta para agregar un producto al carrito.
router.post("/", validateAuth, addProduct);

// Ruta para borrar un producto del carrito
router.delete("/delete/", validateAuth, deleteItem);

// Ruta para actializar la cantidad de productos en el carrito.
router.put("/:userId", (req, res, next) => {
  Cart.findOne({
    where: {
      productId: req.body.productId,
      userId: req.params.userId,
    },
  })

    .then((productToUpdate) => {
      productToUpdate.update({ quantity: req.body.quantity }).then(() => {
        Cart.findAll({
          include: {
            model: Product,
          },
          where: {
            [Op.and]: [{ userId: req.params.userId }, { state: "pending" }],
          },
        }).then((cartOrder) => {
          res.send(cartOrder);
        });
      });
    })
    .catch(next);
});

module.exports = router;
