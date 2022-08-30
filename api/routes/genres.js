const express = require("express");
const router = express.Router();
const { Product, User, Genre } = require("../models");

// Ruta para devolver todos los generos.
router.get("/", (req, res, next) => {
  Genre.findAll({
    include: {
      model: Product,
    },
  })
    .then((genres) => res.status(200).send(genres))
    .catch(next);
});
// Ruta para cambiar el nombre de un genero.
router.put("/:genreID", (req, res, next) => {
  if (!req.params.genreID) res.sendStatus(404);
  Genre.update(req.body, { where: { id: req.params.genreID } })
    .then(() => res.sendStatus(201))
    .catch(next);
});

// Ruta para agregar un genero al modelo genres.
router.post("/", (req, res, next) => {
  Genre.create(req.body)
    .then(() => res.sendStatus(204))
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  console.log(req.params);
  Genre.destroy({ where: { id: req.params.id } }).then((data) => {
    if (!data) res.sendStatus(404);
    res.sendStatus(204);
  });
});

module.exports = router;
