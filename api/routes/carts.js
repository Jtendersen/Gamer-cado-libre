const express = require("express");
const Cart = require("../models/Carts");
const { Op } = require("sequelize");

const router = express.Router();

//ruta para visualizar el carrito completo:
//cuando clickea en el carrito hace este pedido get y el back devuelve todo lo que este en "pending"
router.get("/", (req, res, next) => {
  
  
  Cart.findAll({
    where: {
      [Op.and]: [{ userId: req.params.userId }, { state: "pending" }],
    },
  })
    .then((cartOrder) => {
      res.send(cartOrder);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  
  const {userId, productId, totalPrice } = req.body
  Cart.findOne({
    where: {
      [Op.and]: [
        { userId: userId },
        { productId: productId },
        { state: "pending" },
      ],
    },
  })
    .then((findedCart) => {
      if (findedCart) {
        const actualQuantity = findedCart.quantity;
        findedCart
          .update({ quantity: actualQuantity + req.body.quantity })
          .then((productUpdated) => {
            //VER QUE DATOS REQUIERE EL FRONT ANTE LA ACTUALIZACION DE LA CANT.
            res.send(productUpdated.dataValues);
          });
      } else {
        Cart.create(req.body).then((resp) => {
          Cart.findByPk(resp.dataValues.userId).then((cart) => {
            cart
              .setUser(userId)
              .then((newCart) => res.status(201).send(newCart));
          });
        });
      }
    })
    .catch(next);
});

router.delete("/delete/:userId", (req, res, next) => {
  //VER SI EL FRONT REQUIERE EL PRODUCTO ELIMINADO
  //ver de levantar el usuario por req.cookies
  Cart.destroy({
    where: {
      userId: req.params.userId,
      productId: req.body.productId,
    },
  })
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
});

router.put("/:userId", (req, res, next) => {
  /*REQ BODY TIPO
    {
        quantity: cant,
        productId: pId,
    }
    */
  Cart.findOne({
    where: {
      productId: req.body.productId,
      userId: req.params.userId,
    },
  })
    .then((productToUpdate) => {
      productToUpdate
        .update({ quantity: req.body.quantity })
        .then((productUpdated) => {
          //VER QUE DATOS REQUIERE EL FRONT ANTE LA ACTUALIZACION DE LA CANT.
          res.send(productUpdated.dataValues);
        });
    })
    .catch(next);
});

module.exports = router;
