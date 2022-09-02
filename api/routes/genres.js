const express = require("express");
const {
  deleteGenre,
  addGenre,
  nameChange,
  getAllGenres,
} = require("../Controllers/genresController");
const router = express.Router();

// Ruta para devolver todos los generos.
router.get("/", getAllGenres);
// Ruta para cambiar el nombre de un genero.
router.put("/:genreID", nameChange);

// Ruta para agregar un genero al modelo genres.
router.post("/", addGenre);

router.delete("/:id", deleteGenre);

module.exports = router;
