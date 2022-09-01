const { Genre, Product } = require("../models");

const getAllGenres = (req, res, next) => {
  Genre.findAll({
    include: {
      model: Product,
    },
  })
    .then((genres) => res.status(200).send(genres))
    .catch(next);
};

const nameChange = (req, res, next) => {
  if (!req.params.genreID) res.sendStatus(404);
  Genre.update(req.body, { where: { id: req.params.genreID } })
    .then(() => res.sendStatus(201))
    .catch(next);
};

const addGenre = (req, res, next) => {
  Genre.create(req.body)
    .then(() => res.sendStatus(204))
    .catch(next);
};

const deleteGenre = (req, res, next) => {
  Genre.destroy({ where: { id: req.params.id } })
    .then((data) => {
      if (!data) res.sendStatus(404);
      res.sendStatus(204);
    })
    .catch(next);
};

module.exports = { getAllGenres, nameChange, addGenre, deleteGenre };
