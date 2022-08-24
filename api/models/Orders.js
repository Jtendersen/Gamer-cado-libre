const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");

class Order extends Model {}

Order.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    cartId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "order",
  }
);

module.exports = Order;
