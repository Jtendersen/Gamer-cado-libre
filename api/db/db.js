const Sequelize = require("sequelize");
const db = new Sequelize("e-commerce", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;