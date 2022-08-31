const express = require("express");
const Cart = require("../models/Carts");
const { Op } = require("sequelize");
const { Product } = require("../models");

const router = express.Router();

// Ruta para visualizar el carrito completo, cuando clickea en el carrito hace este pedido get y el back devuelve todo lo que este en "pending".
router.get("/:userId", (req, res, next) => {

//console.log("ESTA ES LA COOKIE DE PEDIR EL CART", req.cookies.token)

  Cart.findAll({
    include: {
      model: Product,
    },
    where: {
      [Op.and]: [{ userId: req.params.userId }, { state: "pending" }],
    },
  })
    .then((cartOrder) => {
      res.send(cartOrder);
    })
    .catch(next);
});

// Ruta para agregar un producto al carrito.
router.post("/", (req, res, next) => {
  const usuario = req.body.userId;
  Cart.findOne({
    where: {
      [Op.and]: [
        { userId: usuario },
        { productId: req.body.productId },
        { state: "pending" },
      ],
    },
  })
    .then((findedCart) => {
      if (findedCart) {
        const actualQuantity = findedCart.quantity;
        findedCart
          .update({ quantity: actualQuantity + req.body.quantity })
          .then(() => {
            //VER QUE DATOS REQUIERE EL FRONT ANTE LA ACTUALIZACION DE LA CANT.
            Cart.findAll({
              include: {
                model: Product,
              },
              where: {
                [Op.and]: [{ userId: usuario }, { state: "pending" }],
              },
            }).then((cartOrder) => {
              res.send(cartOrder);
            });
          });
      } else {
        Cart.create({
          quantity: req.body.quantity,
          productId: req.body.productId,
        }).then((resp) => {
          Cart.findByPk(resp.dataValues.id).then((cart) => {
            cart.setUser(usuario).then(() => {
              Cart.findAll({
                include: {
                  model: Product,
                },
                where: {
                  [Op.and]: [{ userId: usuario }, { state: "pending" }],
                },
              }).then((cartOrder) => {
                res.send(cartOrder);
              });
            });
          });
        });
      }
    })
    .catch(next);
});

// Ruta para borrar un producto del carrito
router.delete("/delete/:userId", (req, res, next) => {

//VER SI EL FRONT REQUIERE EL PRODUCTO ELIMINADO
  //ver de levantar el usuario por req.cookies
  Cart.destroy({
    where: {
      userId: req.params.userId,
      productId: req.body.itemId,
    },
  })
    .then(() => {
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
    })
    .catch(next);
});

// Ruta para actializar la cantidad de productos en el carrito.
router.put("/:userId", (req, res, next) => {
  console.log(req.body)
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
    .then((productToUpdate) => {console.log(productToUpdate)
      productToUpdate.update({ quantity: req.body.quantity }).then(() => {
        //VER QUE DATOS REQUIERE EL FRONT ANTE LA ACTUALIZACION DE LA CANT.
        Cart.findAll({
          include: {
            model: Product,
          },
          where: {
            [Op.and]: [{ userId: usuario }, { state: "pending" }],
          },
        }).then((cartOrder) => {
          res.send(cartOrder);
        });
      });
    })
    .catch(next);
});

module.exports = router;
