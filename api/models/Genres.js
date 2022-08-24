const S = require("sequelize");
const db = require("../db/db");

class Genre extends S.Model {}

Genre.init(
  {
    genre: {
      type: S.STRING,
    }
  },
  { sequelize: db, modelName: "genre" }
);

module.exports = Genre;
