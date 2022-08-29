const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");

class Review extends Model {}

Review.init(
  {
    review: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 10,
      },
    },
  },
  {
    sequelize,
    modelName: "review",
  }
);

module.exports = Review;
