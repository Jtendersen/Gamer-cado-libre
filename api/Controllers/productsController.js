const { Product, Genre } = require("../models");
const { Op } = require("sequelize");

const getAllProducts = (req, res, next) => {
  try {
    Product.findAll().then((allProducts) => res.status(200).send(allProducts));
  } catch (error) {
    console.log(error);
    next;
  }
};

const getProductById = (req, res, next) => {
  try {
    Product.findByPk(req.params.productID).then((productMatched) =>
      res.status(200).send(productMatched)
    );
  } catch (error) {
    console.log(error);
    next;
  }
};

const findSimilarGames = (req, res, next) => {
  if (!req.params.input) res.status(404).send("empty input");
  Product.findAll({
    where: {
      [Op.or]: [
        { name: { [Op.iLike]: `%${req.params.input}%` } },
        { description: { [Op.iLike]: `%${req.params.input}%` } },
      ],
    },
  })
    .then((productMatches) => {
      if (!productMatches) res.status(201).send("NO MATCHES");
      res.status(200).send(productMatches);
    })
    .catch(next);
};

const findGamesByGenre = (req, res, next) => {
  Genre.findOne({
    where: { genre: req.params.genre },
    include: { model: Product },
  })
    .then((resp) => {
      res.status(200).send(resp.dataValues.products);
    })
    .catch(next);
};

const deleteProduct = (req, res, next) => {
  Product.destroy({ where: { id: req.params.productID } })
    .then(() => res.sendStatus(204))
    .catch(next);
};

const createProduct = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || !price)
    res.status(404).send("COLUMNA NAME Y PRICE NO PUEDE ESTAR UNDEFINED");
  Product.create(req.body)
    .then((productCreated) => {
      res.status(204).send(productCreated);
    })
    .catch(next);
};

const addOrEditGenre = (req, res, next) => {
  if (!req.params.productID) res.status(404).send("PRODUCT ID EMPTY");
  Product.update(req.body, { where: { id: req.params.productID } })
    .then((data) => res.status(201).send(data))
    .catch(next);
};

module.exports = {
  getAllProducts,
  getProductById,
  findSimilarGames,
  findGamesByGenre,
  deleteProduct,
  createProduct,
  addOrEditGenre,
};
