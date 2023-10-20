"use strict";
const { Shop, User } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // create bulky create data from seeder
  async up(queryInterface, Sequelize) {
    const shops = await Shop.findAll();

    await queryInterface.bulkInsert("Users", [
      {
        name: "Alip",
        address: "Setu",
        age: 18,
        shopId: shops[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Habib",
        address: "Bekasi Timur",
        age: 24,
        shopId: shops[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Iwa",
        address: "Bekasi Utara",
        age: 24,
        shopId: shops[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Iky",
        address: "Keranji",
        age: 24,
        shopId: shops[3].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Zidhan",
        address: "Tambun",
        age: 24,
        shopId: shops[4].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const users = await User.findAll();

    await queryInterface.bulkInsert("Auths", [
      {
        email: "alibaba@gmail.com",
        password:
          "$2a$12$ja8i7.C4JxoQ1PxeB45DIeE/ JANucutj2Obo6E/AShSE0uXzJa0CW",
        confirmPassword:
          "$2a$12$ja8i7.C4JxoQ1PxeB45DIeE/JANucutj2Obo6E/AShSE0uXzJa0CW",
        userId: users[0].userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "habib@gmail.com",
        password:
          "$2a$12$8l2IUNU/yskAaVA9haD1oe2J8CICakiDBYuEiDv4QYlDO7bHbLPWi",
        confirmPassword:
          "$2a$12$8l2IUNU/yskAaVA9haD1oe2J8CICakiDBYuEiDv4QYlDO7bHbLPWi",
        userId: users[0].userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "iwa@gmail.com",
        password:
          "$2a$12$ja8i7.C4JxoQ1PxeB45DIeE/ JANucutj2Obo6E/AShSE0uXzJa0CW",
        confirmPassword:
          "$2a$12$ja8i7.C4JxoQ1PxeB45DIeE/ JANucutj2Obo6E/AShSE0uXzJa0CW",
        userId: users[0].userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "iky@gmail.com",
        password:
          "$2a$12$ja8i7.C4JxoQ1PxeB45DIeE/ JANucutj2Obo6E/AShSE0uXzJa0CW",
        confirmPassword:
          "$2a$12$ja8i7.C4JxoQ1PxeB45DIeE/ JANucutj2Obo6E/AShSE0uXzJa0CW",
        userId: users[0].userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "zidhan@gmail.com",
        password:
          "$2a$12$ja8i7.C4JxoQ1PxeB45DIeE/ JANucutj2Obo6E/AShSE0uXzJa0CW",
        confirmPassword:
          "$2a$12$ja8i7.C4JxoQ1PxeB45DIeE/ JANucutj2Obo6E/AShSE0uXzJa0CW",
        userId: users[0].userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  // create bulky delete data from seeder
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Auths", null, {});
  },
};
