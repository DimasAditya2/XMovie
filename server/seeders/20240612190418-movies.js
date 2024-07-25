"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const movies = require("../data/movies.json").map((movie) => {
      movie.createdAt = movie.updatedAt = new Date();

      return movie;
    });

    await queryInterface.bulkInsert("Movies", movies);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
