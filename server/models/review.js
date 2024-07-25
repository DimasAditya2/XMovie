"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, { foreignKey: "UserId" });
      Review.belongsTo(models.Movie, { foreignKey: "MovieId" });
    }
  }
  Review.init(
    {
      UserId: DataTypes.INTEGER,
      MovieId: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
