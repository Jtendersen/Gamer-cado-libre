const Cart = require("../models/Carts");
const { Op } = require("sequelize");
const { Product } = require("../models");

const getCart = (req, res, next) => {
  const userId = req.user.id;
  Cart.findAll({
    include: {
      model: Product,
    },
    where: {
      [Op.and]: [{ userId: userId }, { state: "pending" }],
    },
  })
    .then((cartOrder) => {
      res.send(cartOrder);
    })
    .catch(next);
};

const addProduct = (req, res, next) => {
  const userId = req.user.id;
  Cart.findOne({
    where: {
      [Op.and]: [
        { userId: userId },
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
            Cart.findAll({
              include: {
                model: Product,
              },
              where: {
                [Op.and]: [{ userId: userId }, { state: "pending" }],
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
            cart.setUser(userId).then(() => {
              Cart.findAll({
                include: {
                  model: Product,
                },
                where: {
                  [Op.and]: [{ userId: userId }, { state: "pending" }],
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
};

const deleteItem = (req, res, next) => {
  const userId = req.user.id;
  Cart.destroy({
    where: {
      userId: userId,
      productId: req.body.itemId,
    },
  })
    .then(() => {
      Cart.findAll({
        include: {
          model: Product,
        },
        where: {
          [Op.and]: [{ userId: userId }, { state: "pending" }],
        },
      }).then((cartOrder) => {
        res.send(cartOrder);
      });
    })
    .catch(next);
};

const updateProduct = (req, res, next) => {
  console.log("BODY EN UPDATE", req.body);
  const userId = req.user.id;
  Cart.findOne({
    where: {
      productId: req.body.productId,
      userId: userId,
    },
  })

    .then((productToUpdate) => {
      console.log("este es el product to update", productToUpdate);
      productToUpdate.update({ quantity: req.body.quantity }).then(() => {
        Cart.findAll({
          include: {
            model: Product,
          },
          where: {
            [Op.and]: [{ userId: userId }, { state: "pending" }],
          },
        }).then((cartOrder) => {
          res.send(cartOrder);
        });
      });
    })
    .catch(next);
};

module.exports = { getCart, addProduct, deleteItem, updateProduct };
