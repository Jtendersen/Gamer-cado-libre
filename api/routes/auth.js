const express = require("express");
const User = require("../models/Users");
const router = express.Router();
const { generateToken } = require("../middlewares/tokens");
const { validateAuth } = require("../middlewares/auth");

//Ruta para persistencia
router.get("/me", validateAuth, (req, res) => {
  res.send(req.user);
});

// Ruta para registrar un usuario.
router.post("/register", (req, res) => {
  User.create(req.body).then((user) => {
    const payload = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      admin: user.admin,
      age:user.age
    };
    res.status(201).send(payload);
  });
});

// Ruta para loguear un usuario.
router.post("/login", (req, res) => {
  const { email, password, firstName, lastName, age} = req.body;

  if (req.body.google) {
    User.findOrCreate({
      where: { email },
      defaults: {
        email,
        lastName,
        firstName,
        password: "sarasa",
        age:18
      },
    }).then((data) => {
      const user = data[0].dataValues;

      const payload = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        admin: false,
        age: user.age
      };
      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
    });
  } else {
    User.findOne({ where: { email } }).then((user) => {
      if (!user) return res.sendStatus(401);
      user.validatePassword(password).then((isValid) => {
        if (!isValid) return res.sendStatus(401);
        const payload = {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          admin: user.admin,
          age: user.age
        };
        const token = generateToken(payload);
        res.cookie("token", token);
        res.send(payload);
      });
    });
  }
});

// Ruta para desologuear un usuario.
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

module.exports = router;
