"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const movieAct = require("../data/movieActors.json").map((ma) => {
      ma.createdAt = ma.updatedAt = new Date();

      return ma;
    });

    await queryInterface.bulkInsert("MovieActors", movieAct);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("MovieActors", null, {});
  },
};
