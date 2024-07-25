"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class WatchListMovie extends Model {
    static associate(models) {
      // define association here
      WatchListMovie.belongsTo(models.WatchList, { foreignKey: "WatchlistId" });
      WatchListMovie.belongsTo(models.Movie, { foreignKey: "MovieId" });
    }
  }
  WatchListMovie.init(
    {
      WatchListId: DataTypes.INTEGER,
      MovieId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "WatchListMovie",
    }
  );
  return WatchListMovie;
};
