const { Op } = require("sequelize");
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");
const Cart = require("./Carts");

class Order extends Model {}

Order.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalOrderPrice: {
      type: DataTypes.INTEGER,
    },
    paymentMethod: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["created", "processed", "cancelled", "complete"]],
      },
    },
    sendingAddress: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "order",
  }
);

//como este hook no anda creo el calculo del precio en la ruta

Order.addHook("beforeCreate", async (order) => {
  let total = 0;
  const carts = await Cart.findAll({
    where: {
      [Op.and]: [{ userId: order.userId }, { state: "pending" }],
    },
  });
  carts.map((cart) => {
    total += cart.dataValues.totalPrice;
  });
  order.totalOrderPrice = total;
});

module.exports = Order;
