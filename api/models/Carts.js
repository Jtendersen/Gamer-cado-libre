const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Cart extends Model {}

Cart.init(
  {
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalPrize: {
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
