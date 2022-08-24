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
  },
  {
    sequelize,
    modelName: "order",
  }
);

Order.addHook("beforeCreate", async (cart) => {
  const carts = await Cart.findAll({
    where: {
      userId: order.userId,
      state: "pending",
    },
  });
  order.totalPrice = product.dataValues.price * cart.quantity;
});

module.exports = Order;
