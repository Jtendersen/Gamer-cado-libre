const { Review } = require("../models");

const getAllReviews = (req, res, next) => {
  Review.findAll({ where: { productId: req.params.id } })
    .then((reviews) => res.status(200).send(reviews))
    .catch(next);
};

const newReview = (req, res, next) => {
  Review.create(req.body)
    .then(() => res.sendStatus(204))
    .catch(next);
};

const deleteReview = (req, res, next) => {
  Review.destroy({ where: { id: req.params.id } })
    .then((data) => {
      if (!data) res.sendStatus(404);
      res.sendStatus(204);
    })
    .catch(next);
};

module.exports = { getAllReviews, newReview, deleteReview };
