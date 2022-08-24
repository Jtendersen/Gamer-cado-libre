const User = require("./Users");
const Product = require("./Products");
const Cart = require("./Carts");
const Order = require("./Orders");

Order.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Order);
Cart.belongsTo(Order, { foreignKey: "orderId" });
// Cart.hasOne(Order);
Cart.belongsTo(Product, { foreignKey: "productId" });
Cart.belongsTo(User);
User.hasMany(Cart);
Product.hasOne(Cart);

module.exports = { User, Product, Cart, Order };
