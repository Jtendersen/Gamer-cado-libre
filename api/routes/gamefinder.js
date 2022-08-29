const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/", (req, res, next) => {
  const query = `fields age_ratings.*,artworks,checksum,cover.*,first_release_date,genres.*,name,screenshots.*,storyline,summary,url,videos,websites; search "${req.body.search}";`;
  const query1 = `fields alternative_name,character,checksum,collection,company,description,game,name,platform,published_at,test_dummy,theme; search "${req.body.search}";`;

  axios({
    url: "https://api.igdb.com/v4/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": "78qbf2b7y5uetp8x47n99avr075374",
      Authorization: "Bearer xc6bc037ca4zi1ogigbps7vxtgof8w",
    },
    data: query,
  })
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
