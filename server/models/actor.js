'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    static associate(models) {
      Actor.belongsToMany(models.Movie, { through: models.MovieActor, foreignKey: 'ActorId' });
    }
  }
  Actor.init({
    name: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    biography: DataTypes.STRING,
    photoUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Actor',
  });
  return Actor;
};