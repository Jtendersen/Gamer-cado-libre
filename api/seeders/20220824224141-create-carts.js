"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const cartList = [
      {
        quantity: 2,
        productId: 1,
        userId: 1,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        totalPrice: 2000,
      },
      {
        quantity: 5,
        productId: 3,
        userId: 1,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        totalPrice: 7500,
      },
      {
        quantity: 1,
        productId: 5,
        userId: 1,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        totalPrice: 0,
      },
      {
        quantity: 1,
        productId: 5,
        userId: 3,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        totalPrice: 0,
      },
      {
        quantity: 3,
        productId: 4,
        userId: 3,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        totalPrice: 15,
      },
      {
        quantity: 1,
        productId: 3,
        userId: 3,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        totalPrice: 1500,
      },
      {
        quantity: 1,
        productId: 1,
        userId: 7,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        totalPrice: 1000,
      },
      {
        quantity: 2,
        productId: 2,
        userId: 7,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        totalPrice: 20,
      },
      {
        quantity: 3,
        productId: 3,
        userId: 7,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        totalPrice: 4500,
      },
      {
        quantity: 4,
        productId: 4,
        userId: 7,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        totalPrice: 20,
      },
      {
        quantity: 5,
        productId: 5,
        userId: 7,
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
        totalPrice: 0,
      },
    ];
    return queryInterface.bulkInsert("carts", cartList);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("carts", null, {});
  },
};
