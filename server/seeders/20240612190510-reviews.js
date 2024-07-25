"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const reviews = require("../data/reviews.json").map((review) => {
      review.createdAt = review.updatedAt = new Date();

      return review;
    });

    await queryInterface.bulkInsert("Reviews", reviews);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reviews", null, {});
  },
};
