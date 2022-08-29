"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const cartList = [
      {
        quantity: 2,
        productId: 135381,
        userId: 1,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        // totalPrice: 2000,
      },
      {
        quantity: 5,
        productId: 7313,
        userId: 1,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        // totalPrice: 7500,
      },
      {
        quantity: 1,
        productId: 187,
        userId: 1,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        // totalPrice: 0,
      },
      {
        quantity: 1,
        productId: 9360,
        userId: 3,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        // totalPrice: 0,
      },
      {
        quantity: 3,
        productId: 3073,
        userId: 3,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        // totalPrice: 15,
      },
      {
        quantity: 1,
        productId: 47940,
        userId: 3,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        // totalPrice: 1500,
      },
      {
        quantity: 1,
        productId: 117106,
        userId: 7,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        // totalPrice: 1000,
      },
      {
        quantity: 2,
        productId: 145191,
        userId: 7,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        // totalPrice: 20,
      },
      {
        quantity: 3,
        productId: 7498,
        userId: 7,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        // totalPrice: 4500,
      },
      {
        quantity: 4,
        productId: 84633,
        userId: 7,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        // totalPrice: 20,
      },
      {
        quantity: 5,
        productId: 44570,
        userId: 7,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        // totalPrice: 0,
      },
    ];
    return queryInterface.bulkInsert("carts", cartList);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("carts", null, {});
  },
};
