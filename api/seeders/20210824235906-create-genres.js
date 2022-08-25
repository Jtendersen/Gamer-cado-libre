"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const genresList = [
      {
        genre: "Point and Click",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Fighting",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Shooter",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Music",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Platform",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Puzzle",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Racing",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "RPG",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Real Time Strategy RTS",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Simulator",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Sport",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Strategy",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Turn Based Strategy TBS",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Tactical",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Quiz / Trivia",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Pinball",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Adventure",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Arcade",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Visual Novel",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Indie",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "Card and Board Game",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        genre: "MOBA",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
    ];
    return queryInterface.bulkInsert("genres", genresList);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("genres", null, {});
  },
};
