'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      // define association here
      Movie.hasMany(models.Review, { foreignKey: 'MovieId' });
      Movie.belongsToMany(models.Actor, { through: models.MovieActor, foreignKey: 'MovieId' });
      Movie.hasMany(models.WatchListMovie, { foreignKey: 'MovieId' });
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    director: DataTypes.STRING,
    genres: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    posterUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};