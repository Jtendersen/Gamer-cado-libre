const express = require("express");
const router = express.Router();
const { validateADM } = require("../middlewares/tokens");
const {
  fail,
  showUsers,
  deleteUser,
  changeAdmin,
  editUser,
} = require("../Controllers/usersController");

// Ruta para editar los campos de un usuario, email, firstName, lastName, password y age.
router.put("/:id", editUser);

// Ruta para cambiar el valor de admin, false => true.
router.put("/admin/:id", validateADM, changeAdmin);

// Ruta para borrar un usuario.
router.delete("/delete/:id", validateADM, deleteUser);

// Ruta para mostrar todos los usuarios.
router.get("/allUsers", validateADM, showUsers);

// Ruta, en caso de que las anteriores fallen entonces se devolvera un error 404.
router.use("/", fail);

module.exports = router;
