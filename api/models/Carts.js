const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");

class Cart extends Model {}

Cart.init(
  {
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "cart",
  }
);

module.exports = Cart;
