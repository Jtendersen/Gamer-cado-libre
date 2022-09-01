const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");
const Product = require("./Products");

class Cart extends Model {}

Cart.init(
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["complete", "pending"]],
      },
      defaultValue: "pending",
    },
    totalPrice: {
      type: DataTypes.INTEGER,
    },
    productId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "cart",
  }
);

// Hook para traer el precio unitario y multiplica x cantidad.
Cart.addHook("beforeCreate", async (cart) => {
  const product = await Product.findByPk(cart.productId);
  cart.totalPrice = product.dataValues.price * cart.quantity;
});

Cart.addHook("beforeUpdate", async (cart) => {
  const product = await Product.findByPk(cart.productId);
  cart.totalPrice = product.dataValues.price * cart.quantity;
});

module.exports = Cart;
