"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let productList = [
      {
        name: "The Lord of The anillacos",
        description:
          "Un juego donde hay que encontrar la pista clandestina de anillaco",
        price: 1000,
        valoration: 7,
        esrb: 18,
       // genreId: 1,
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
      },
      {
        name: "Doom 3D",
        description:
          "Un juego que actualmente podria correr en una notebook del gobierno",
        price: 10,
        valoration: 3,
        esrb: 20,
        //genreId: 2,
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
      },
      {
        name: "Zelda",
        description:
          "Un juego que jugaba cuando era joven y los pibes me dejaban usar la play",
        price: 1500,
        valoration: 8,
        esrb: 15,
       // genreId: 3,
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
      },
      {
        name: "PacMan",
        description: "Un juego que todavia no se entiende el exito que tuvo",
        price: 5,
        valoration: 2,
        esrb: 8,
       // genreId: 4,
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
      },
      {
        name: "Fortnite",
        description: "Un juego que juegan todos los pibitos ahora",
        price: 0,
        valoration: 9,
        esrb: 15,
       // genreId: 5,
        updatedAt: "2022-08-23T22:40:23.479Z",
        createdAt: "2022-08-23T22:40:23.479Z",
      },
    ];
    return queryInterface.bulkInsert("products", productList);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
