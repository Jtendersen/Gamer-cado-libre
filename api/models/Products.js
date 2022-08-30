const S = require("sequelize");
const db = require("../db/db");

class Product extends S.Model {}

Product.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
      type: S.TEXT,
    },
    price: {
      type: S.INTEGER,
      allowNull: false,
    },
    valoration: {
      type: S.FLOAT,
      // defaultValue: 0,
    },
    esrb: {
      type: S.STRING,
    },
    urlId: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "product" }
);

module.exports = Product;
