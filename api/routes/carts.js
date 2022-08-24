const express = require("express");
const Cart = require("../models/Carts");

const router = express.Router();

router.post("/add/:userId", (req, res) => {
  //ver de levantar el usuario por req.cookies
  /*MODELO DE BODY
    {
        quantity: cant,
        productId: pId,
    }
    */
  const usuario = req.params.userId;
  Cart.create(req.body).then((resp) => {
    Cart.findByPk(resp.dataValues.id).then((cart) => {
      cart.setUser(usuario).then((newCart) => res.status(201).send(newCart));
    });
  });
});

//
module.exports = router;
