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
      //HARDCODEADO. CAMBIAR POR HOOK
      type: DataTypes.INTEGER,
    },
    productId: {
      type: DataTypes.INTEGER,
    },
    // userId: {
    //   type: DataTypes.INTEGER,
    // },
  },
  {
    sequelize,
    modelName: "cart",
  }
);

Cart.addHook("beforeValidate", async (cart, options) => {
  const product = await Product.findByPk(cart.productId);
  // cart.totalPrice = data.price* cart.quantity
});
//hacer un hook para traer precio unitario y multiplicarlo por cantidad before create?

module.exports = Cart;
