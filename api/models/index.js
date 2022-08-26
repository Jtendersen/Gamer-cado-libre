const User = require("./Users");
const Product = require("./Products");
const Cart = require("./Carts");
const Order = require("./Orders");
const Genre= require("./Genres")


// A prodcut le agrega el id de Genre.
Product.belongsTo(Genre)
// A product le agrega los id del Genre. Osea le agrega su respectivo genero.
Genre.hasMany(Product)
// A ordenes se le agrega la fk de user.
Order.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Order);
Cart.belongsTo(Order, { foreignKey: "orderId" });
// Cart.hasOne(Order);
Cart.belongsTo(Product, { foreignKey: "productId" });
Cart.belongsTo(User);
User.hasMany(Cart);
// A product se le agrega el id de su carrito.
Product.hasOne(Cart);

module.exports = { User, Product, Cart, Order ,Genre};
