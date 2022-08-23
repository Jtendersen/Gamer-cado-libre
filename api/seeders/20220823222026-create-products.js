"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let productList = [
      {
        id: 1,
        name: "The Lord of The anillacos",
        description:
          "Un juego donde hay que encontrar la pista clandestina de anillaco",
        price: 1000,
        valoration: 7,
        age: 18,
        genre: "terror",
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
      },

      {
        id: 2,
        name: "Doom 3D",
        description:
          "Un juego que actualmente podria correr en una notebook del gobierno",
        price: 10,
        valoration: 3,
        age: 20,
        genre: "accion",
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
      },

      {
        id: 3,
        name: "Zelda",
        description:
          "Un juego que jugaba cuando era joven y los pibes me dejaban usar la play",
        price: 1500,
        valoration: 8,
        age: 15,
        genre: "RPG",
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
      },

      {
        id: 4,
        name: "PacMan",
        description: "Un juego que todavia no se entiende el exito que tuvo",
        price: 5,
        valoration: 2,
        age: 8,
        genre: "Abandoned Ware",
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
      },

      {
        id: 5,
        name: "Fortnite",
        description: "Un juego que juegan todos los pibitos ahora",
        price: 0,
        valoration: 9,
        age: 15,
        genre: "Action",
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
      },
    ];
    return queryInterface.bulkInsert("products", productList);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
