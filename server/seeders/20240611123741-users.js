"use strict";
const { hashPassword } = require("../helpers/bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = require("../data/users.json");

    let data = users.map((user) => {
      user.password = hashPassword(user.password);
      user.createdAt = user.updatedAt = new Date();

      return user;
    });

    await queryInterface.bulkInsert("Users", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null);
  },
};
