const express = require("express");
const Cart = require("../models/Carts");

const router = express.Router();

router.post("/add/:userId", (req, res, next) => {
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
  //EL FRONT DEBERIA EVITAR EL PEDIDO DUPLICADO MISMO USER MISMO PRODUCTO?
  //x ej: agrega prod1. Luego agrega prod1, el front deberia sumar?
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

module.exports = router;
