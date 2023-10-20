"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Shops", [
      {
        name: "Toko Alip",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toko Habib",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toko Iwa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toko Iky",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toko Zidhan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
