const User = require("./Users");
const Product = require("./Products");
const Cart = require("./Carts");
const Order = require("./Orders");
const Genre = require("./Genres");
const Review = require("./Reviews");

// GENRE
Product.belongsTo(Genre);
Genre.hasMany(Product);
//
Order.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Order);
Cart.belongsTo(Order, { foreignKey: "orderId" });
Order.hasMany(Cart);
Cart.belongsTo(Product, { foreignKey: "productId" });
Cart.belongsTo(User);
User.hasMany(Cart);
Product.hasOne(Cart);

User.hasMany(Review);
Review.belongsTo(User);
Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = { User, Product, Cart, Order, Genre, Review };
