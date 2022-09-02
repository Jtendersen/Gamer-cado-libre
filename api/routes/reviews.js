const express = require("express");
const {
  deleteReview,
  newReview,
  getAllReviews,
} = require("../Controllers/reviewsController");
const router = express.Router();

//Traer todas las reviews
router.get("/:id", getAllReviews);

//Crear una nueva Review
router.post("/", newReview);

//Borrar una Review
router.delete("/:id", deleteReview);

module.exports = router;
