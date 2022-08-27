"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const genresList = [
      {
        id: 2,
        genre: "Point-and-click",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 4,
        genre: "Fighting",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 5,
        genre: "Shooter",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 7,
        genre: "Music",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 8,
        genre: "Platform",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 9,
        genre: "Puzzle",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 10,
        genre: "Racing",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 11,
        genre: "Real Time Strategy (RTS)",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 12,
        genre: "Role-playing (RPG)",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 13,
        genre: "Simulator",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 14,
        genre: "Sport",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 15,
        genre: "Strategy",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 16,
        genre: "Turn-based strategy (TBS)",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 24,
        genre: "Tactical",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 26,
        genre: "Quiz / Trivia",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 30,
        genre: "Pinball",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 31,
        genre: "Adventure",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 33,
        genre: "Arcade",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 34,
        genre: "Visual Novel",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 32,
        genre: "Indie",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 35,
        genre: "Card and Board Game",
        updatedAt: faker.date.past(),
        createdAt: faker.date.past(),
      },
      {
        id: 36,
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
