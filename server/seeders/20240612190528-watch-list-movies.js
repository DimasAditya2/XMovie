"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const listsMovies = require("../data/watchListMovies.json").map((list) => {
      list.createdAt = list.updatedAt = new Date();

      return list;
    });

    await queryInterface.bulkInsert("WatchListMovies", listsMovies);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("WatchListMovies", null, {});
  },
};
