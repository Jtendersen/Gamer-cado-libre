const express = require("express");
const router = express.Router();
const { Product, Genre } = require("../models");
const { Op } = require("sequelize");
const {
  addOrEditGenre,
  createProduct,
  deleteProduct,
  findGamesByGenre,
  findSimilarGames,
  getProductById,
  getAllProducts,
} = require("../Controllers/productsController");

//DEVUELVE TODOS LOS PRODUCTOS
router.get("/allProducts", getAllProducts);

//BUSCA UN PRODUCTO POR ID
router.get("/:productID", getProductById);

//BUSCA TODOS LOS JUEGOS CON TITULO SIMILAR A EL INPUT DEL USER EN LA BUSQUEDA
router.get("/search/:input", findSimilarGames);

//BUSCA TODOS LOS JUEGOS DE UN MISMO GENERO
router.get("/allGenres/:genre", findGamesByGenre);

// Ruta para eliminar un producto.
router.delete("/:productID", deleteProduct);

// Ruta para crear un producto.
router.post("/", createProduct);

// Ruta para agregar o cambiar el genero, se tiene que pasar como parametro el id del genero | genreId:2 |
router.put("/:productID", addOrEditGenre);

module.exports = router;
