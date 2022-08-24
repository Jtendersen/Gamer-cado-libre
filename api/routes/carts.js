const express = require("express");
const Cart = require("../models/Carts");

const router = express.Router();

router.post("/add/:userId", (req, res, next) => {
  //EL FRONT DEBERIA EVITAR EL PEDIDO DUPLICADO MISMO USER MISMO PRODUCTO?
  //x ej: agrega prod1. Luego agrega prod1, el front deberia sumar?
  //ver de levantar el usuario por req.cookies
  /*MODELO DE BODY
    {
        quantity: cant,
        productId: pId,
    }
    */
  const usuario = req.params.userId;
  Cart.create(req.body)
    .then((resp) => {
      Cart.findByPk(resp.dataValues.id).then((cart) => {
        cart.setUser(usuario).then((newCart) => res.status(201).send(newCart));
      });
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
