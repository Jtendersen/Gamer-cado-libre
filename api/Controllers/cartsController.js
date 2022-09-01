const { Cart, Product } = require("../models");
const { Op } = require("sequelize");

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
            cart.setUser(usuario).then(() => {
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
  const userId = req.user.id;
  Cart.findOne({
    where: {
      productId: req.body.productId,
      userId: userId,
    },
  })

    .then((productToUpdate) => {
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
