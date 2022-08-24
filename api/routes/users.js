const express = require("express");
const User = require("../models/Users");
const router = express.Router();
const { generateToken, validateToken } = require("../middlewares/tokens");
const { validateAuth } = require("../middlewares/auth");

router.get("/", (req, res) => {
  console.log("GET USER");
  res.sendStatus(200);
});

router.post("/register", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);
      const payload = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      };
      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
    });
  });
});

router.get("/secret", validateAuth, (req, res) => {
  res.send(req.user);
});

router.get("/me", validateAuth, (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

router.put("/register/:id", (req, res) => {
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
  })
  .catch(error => res.sendStatus(500)) 
});

router.put("/register/:id", (req, res, next) => {
  User.update({
    isAdmin: req.body.isAdmin
  },{
    where: {
      id: req.body.isAdmin
    }
  })
  .then((result)=>{
    res.json(result)
  })
  .catch(next)
})
// ({isAdmin: req.body.isAdmin},{returning; true, where: {req.params.id}}
router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
