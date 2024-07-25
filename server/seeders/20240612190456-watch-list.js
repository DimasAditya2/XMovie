"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const lists = require("../data/WatchList.json").map((list) => {
      list.createdAt = list.updatedAt = new Date();

      return list;
    });

    await queryInterface.bulkInsert("WatchLists", lists);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("WatchLists", null, {});
  },
};
