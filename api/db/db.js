const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DB_NAME || "e-commerce",
  process.env.DB_USER || null,
  process.env.DB_PASSWORD || null,
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    logging: false,
  }
);

module.exports = db;
