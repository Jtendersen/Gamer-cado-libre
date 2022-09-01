const { generateToken } = require("../middlewares/tokens");
const { User } = require("../models");

const me = (req, res) => {
  res.send(req.user);
};

const register = (req, res) => {
  User.create(req.body).then((user) => {
    const payload = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      admin: user.admin,
      age: user.age,
    };
    res.status(201).send(payload);
  });
};

const login = (req, res) => {
  const { email, password, firstName, lastName, age } = req.body;

  if (req.body.google) {
    User.findOrCreate({
      where: { email },
      defaults: {
        email,
        lastName,
        firstName,
        password: "sarasa",
        age: 18,
      },
    }).then((data) => {
      const user = data[0].dataValues;

      const payload = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        admin: false,
        age: user.age,
      };
      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
    });
  } else {
    User.findOne({ where: { email } }).then((user) => {
      if (!user) return res.sendStatus(401);
      user.validatePassword(password).then((isValid) => {
        if (!isValid) return res.sendStatus(401);
        const payload = {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          admin: user.admin,
          age: user.age,
        };
        const token = generateToken(payload);
        res.cookie("token", token);
        res.send(payload);
      });
    });
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

module.exports = { me, register, login, logout };
