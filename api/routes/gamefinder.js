const express = require("express");
const axios = require("axios");
const gamefinder = require("../Controllers/gamefinderController");

const router = express.Router();

router.post("/", gamefinder);

module.exports = router;
