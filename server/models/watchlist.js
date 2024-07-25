"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class WatchList extends Model {
    static associate(models) {
      // define association here
      WatchList.belongsTo(models.User, { foreignKey: "UserId" });
      WatchList.hasMany(models.WatchListMovie, { foreignKey: "WatchListId" });
    }
  }
  WatchList.init(
    {
      UserId: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "WatchList",
    }
  );
  return WatchList;
};
