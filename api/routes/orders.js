const express = require("express");
const { Op } = require("sequelize");
const { Cart, Order } = require("../models");
const sendEmail = require("../utils/index.js");

const router = express.Router();

// Ruta para cuando el cliente confirma un pedido.
router.post("/:userId", (req, res, next) => {
  //ver de recibir por cookies el usuario
  //recibe un req.body con el sig formato:
  /*
        {
          nombre: nombrecompleto
            paymentMethod: pMethod,
            sendingAddress: sAddress
        }
    */

  Order.create({
    userId: req.params.userId,
    paymentMethod: req.body.paymentMethod,
    sendingAddress: req.body.sendingAddress,
    state: "created",
  }).then((response) => {
    const orderId = response.dataValues.id;
    // console.log("ESTE ES EL RESPONSE DEL CREATE ORDER", response);
    Cart.findAll({
      where: {
        [Op.and]: [{ userId: req.params.userId }, { state: "pending" }],
      },
    }).then((cartOrder) => {
      //   console.log("ESTE ES EL ARRAY DE CARTS", cartOrder);
      cartOrder.map((cart) => {
        Cart.findByPk(cart.dataValues.id).then((cartToUpdateState) => {
          cartToUpdateState.update({ state: "complete" });
          cartToUpdateState.setOrder(orderId);
        });
      });
    });
  });
  //aca habria que hacer querys para enviar el pedido completo al front y por mail
  sendEmail(
    "jtendersen@hotmail.com",
    "jtendersen@gmail.com",
    "Amiguito",
    "99565446546",
    "<p>Superlujo1</p><p>SuperLujo2</p><p>Superlujo3</p>",
    `${req.body.recieverName}`
  );

  res.sendStatus(201);
});

module.exports = router;
