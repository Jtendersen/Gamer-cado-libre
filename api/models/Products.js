const S = require("sequelize");
const db = require("../db/db");

class Product extends S.Model {}

Product.init(
  {
    name: {
      type: S.STRING,
    },
    description: {
      type: S.TEXT,
    },
    price: {
      type: S.INTEGER,
    },
    valoration: {
      type: S.STRING,
    },
    esrb: {
      type: S.INTEGER,
    }
  },
  { sequelize: db, modelName: "product" }
);

module.exports = Product;
