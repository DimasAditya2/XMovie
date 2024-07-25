"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const actors = require("../data/actors.json").map((actor) => {
      actor.createdAt = actor.updatedAt = new Date();

      return actor;
    });

    await queryInterface.bulkInsert("Actors", actors);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Actors", null, {});
  },
};
