const express = require("express");
const User = require("../models/Users");
const router = express.Router();
const { generateToken } = require("../middlewares/tokens");
const { validateAuth } = require("../middlewares/auth");
const {
  logout,
  register,
  me,
  login,
} = require("../Controllers/authController");

//Ruta para persistencia
router.get("/me", validateAuth, me);

// Ruta para registrar un usuario.
router.post("/register", register);

// Ruta para loguear un usuario.
router.post("/login", login);

// Ruta para desologuear un usuario.
router.post("/logout", logout);

module.exports = router;
