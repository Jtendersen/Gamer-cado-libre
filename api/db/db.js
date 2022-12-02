const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.PGNAME || "e-commerce",
  process.env.PGUSER || null,
  process.env.PGPASSWORD || null,
  {
    host: process.env.PGHOST || "localhost",
    dialect: "postgres",
    logging: false,
  }
);

module.exports = db;
