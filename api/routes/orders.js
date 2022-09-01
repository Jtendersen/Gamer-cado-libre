const express = require("express");
const { Op } = require("sequelize");
const { Cart, Order } = require("../models");

const router = express.Router();

// Ruta para cuando el cliente confirma un pedido.
router.post("/:userId", (req, res, next) => {
  //ver de recibir por cookies el usuario
  //recibe un req.body con el sig formato:
  /*
        {
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
  res.sendStatus(201);
});
// });

//Ruta para traer todas las ordenes de un usuario
router.get('/:userId', (req, res, next)=>{
  Order
    .findAll({where:{userId:req.params.userId}})
    .then(resp=>res.status(200).send(resp))
    .catch(next)
})

module.exports = router;
