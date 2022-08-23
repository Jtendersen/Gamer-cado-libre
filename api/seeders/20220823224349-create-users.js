"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let userList = [
      {
        id: 1,
        email: "isaac@gmail.com",
        firstName: "Isaac",
        lastName: "Manzo",
        password:
          "$2b$10$1OuFEkDnIEeWauT./AWFn.nWGeI4GrBv/ByBIMW1Q5Dv6E89lqYPm",
        age: 18,
        admin: false,
        updatedAt: "2022-08-23T19:13:32.927Z",
        createdAt: "2022-08-23T19:13:32.927Z",
        salt: "$2b$10$1OuFEkDnIEeWauT./AWFn.",
      },

      {
        id: 2,
        email: "juancho@gmail.com",
        firstName: "Juan",
        lastName: "Tender",
        password:
          "$2b$10$1OuFEkDnIEeWauT./AWFn.nWGeI4GrBv/ByBIMW1Q5Dv6E89lqYPm",
        age: 40,
        admin: false,
        updatedAt: "2022-08-23T19:13:32.927Z",
        createdAt: "2022-08-23T19:13:32.927Z",
        salt: "$2b$10$1OuFEkDnIEeWauT./AWFn.",
      },

      {
        id: 3,
        email: "nahuel@gmail.com",
        firstName: "Nahuel",
        lastName: "Russo",
        password:
          "$2b$10$1OuFEkDnIEeWauT./AWFn.nWGeI4GrBv/ByBIMW1Q5Dv6E89lqYPm",
        age: 20,
        admin: false,
        updatedAt: "2022-08-23T19:13:32.927Z",
        createdAt: "2022-08-23T19:13:32.927Z",
        salt: "$2b$10$1OuFEkDnIEeWauT./AWFn.",
      },

      {
        id: 4,
        email: "thomas@gmail.com",
        firstName: "Thomas",
        lastName: "Villaverde",
        password:
          "$2b$10$1OuFEkDnIEeWauT./AWFn.nWGeI4GrBv/ByBIMW1Q5Dv6E89lqYPm",
        age: 21,
        admin: false,
        updatedAt: "2022-08-23T19:13:32.927Z",
        createdAt: "2022-08-23T19:13:32.927Z",
        salt: "$2b$10$1OuFEkDnIEeWauT./AWFn.",
      },

      {
        id: 5,
        email: "emmanuel@gmail.com",
        firstName: "Emmanuel",
        lastName: "Dacal",
        password:
          "$2b$10$1OuFEkDnIEeWauT./AWFn.nWGeI4GrBv/ByBIMW1Q5Dv6E89lqYPm",
        age: 23,
        admin: false,
        updatedAt: "2022-08-23T19:13:32.927Z",
        createdAt: "2022-08-23T19:13:32.927Z",
        salt: "$2b$10$1OuFEkDnIEeWauT./AWFn.",
      },
    ];
    return queryInterface.bulkInsert("users", userList);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
