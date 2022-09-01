const express = require("express");
const User = require("../models/Users");
const router = express.Router();
const { validateADM } = require("../middlewares/tokens");
const { validateAuth } = require("../middlewares/auth");

// Ruta para validar que token pertenece al usuario logueado.
router.get("/secret", validateAuth, (req, res) => {
  res.send(req.user);
});

// Ruta para editar los campos de un usuario, email, firstName, lastName, password y age.
router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning:true,
    plain:true
  }).then((result) => {
    
    const userUpdate = result[1];
    res.json({
      message: "Se actualizo correctamente",
      userUpdate,
    });
  });
});

// Ruta para cambiar el valor de admin, false => true.
router.put("/admin/:id", validateADM, (req, res, next) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      res.json(result);
    })
    .catch(next);
});

// Ruta para borrar un usuario.
router.delete("/delete/:id", validateADM, (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.sendStatus(204);
  });
});

// Ruta para mostrar todos los usuarios.
router.get("/allUsers", validateADM, (req, res) => {
  User.findAll().then((products) => res.status(200).send(products));
});

// Ruta, en caso de que las anteriores fallen entonces se devolvera un error 404.
router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
