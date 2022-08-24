const User = require("./Users");
const Product = require("./Products");
const Cart = require("./Carts");
const Order = require("./Orders");
const Genre= require("./Genres")

// GENRE
Product.belongsTo(Genre)
Genre.hasMany(Product)
//
Order.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Order);
Cart.belongsTo(Order, { foreignKey: "orderId" });
Cart.hasOne(Order);
Cart.belongsTo(Product, { foreignKey: "productId" });
//saque en la linea de abajo , { foreignKey: "userId" }
Cart.belongsTo(User);
User.hasMany(Cart);
Product.hasOne(Cart);

module.exports = { User, Product, Cart, Order ,Genre};
