const express = require("express");
const User = require("../models/Users");
const router = express.Router();
const { generateToken } = require("../middlewares/tokens");

// Ruta para registrar un usuario.
router.post("/register", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

// Ruta para loguear un usuario.
router.post("/login", (req, res) => {
  const { email, password, firstName, lastName} = req.body;

  if (req.body.google) { 
    
    
    User.findOrCreate({
      where: { email },
      defaults: {
        email,
        lastName,
        firstName,
        password:"sarasa"
      }
    }).then((data)=>{
      
      const user = data[0].dataValues
      
      
      const payload = {
        id:user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        admin: user.admin,
      };
      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
      
      
    })
  
  }

  else { User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);
      const payload = {
        id:user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        admin: user.admin,
      };
      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
      
      
    });
  })};
});


// Ruta para desologuear un usuario.

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

module.exports = router