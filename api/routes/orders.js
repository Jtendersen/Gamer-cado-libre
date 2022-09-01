const express = require("express");
const { Op } = require("sequelize");
const { validateAuth } = require("../middlewares/auth");
const { Cart, Order } = require("../models");
const sendEmail = require("../utils/index.js");

const router = express.Router();

// Ruta para cuando el cliente confirma un pedido.
router.post("/", validateAuth, (req, res, next) => {
  Order.create({
    userId: req.user.id,
    paymentMethod: req.body.paymentMethod,
    sendingAddress: req.body.sendingAddress,
    state: "created",
  }).then((response) => {
    const orderId = response.dataValues.id;
    const totalCartsPrice = response.dataValues.totalOrderPrice;
    Cart.findAll({
      where: {
        [Op.and]: [{ userId: req.user.id }, { state: "pending" }],
      },
    })
      .then((cartOrder) => {
        cartOrder.map((cart) => {
          Cart.findByPk(cart.dataValues.id).then((cartToUpdateState) => {
            cartToUpdateState.update({ state: "complete" });
            cartToUpdateState.setOrder(orderId);
          });
        });
      })
      .then(() => {
        //armamos la lista de productos para mostrar en el mail:
        {
          let productArray = req.body.cart.map((product) => {
            return `
    <tr >
        <td>${product.product.name}</td>
        <td>${product.quantity}</td>
        <td>${product.product.price}</td>
        <td>${product.totalPrice}</td>
      </tr>
    `;
          });
          let productos = productArray.join("");

          sendEmail(
            req.user.email,
            req.user.firstName,
            orderId,
            productos,
            req.body.recieverName,
            totalCartsPrice
          );
        }
      });
    res.send(`Order ${orderId} created successfully`);
  });
});

//Ruta para traer todas las ordenes de un usuario
router.get('/:userId', (req, res, next)=>{
  Order
    .findAll({where:{userId:req.params.userId}})
    .then(resp=>res.status(200).send(resp))
    .catch(next)
})

module.exports = router;
