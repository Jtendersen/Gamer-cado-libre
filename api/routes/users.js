const express = require("express");
const User = require("../models/Users");
const router = express.Router();
const { validateADM } = require("../middlewares/tokens");
const { validateAuth } = require("../middlewares/auth");

router.get("/secret", validateAuth, (req, res) => {
  res.send(req.user);
});

router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
    reurning: true,
    plain: true,
  }).then((result) => {
    const userUpdate = result[1];
    res.json({
      message: "Se actualizo correctamente",
      userUpdate,
    });
  });
});

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

router.delete("/delete/:id", validateADM,(req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.sendStatus(204);
  });
});

router.get('/allUsers', validateADM,(req,res)=>{
  User.findAll()
  .then(products=>res.status(200).send(products))
})

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;