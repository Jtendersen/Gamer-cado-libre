const { User } = require("../models");

const editUser = (req, res, next) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
    plain: true,
  })
    .then((result) => {
      const userUpdate = result[1];
      res.json({
        message: "Se actualizo correctamente",
        userUpdate,
      });
    })
    .catch(next);
};

const changeAdmin = (req, res, next) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      res.json(result);
    })
    .catch(next);
};

const deleteUser = (req, res, next) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
};

const showUsers = (req, res, next) => {
  User.findAll()
    .then((products) => res.status(200).send(products))
    .catch(next);
};

const fail = (req, res) => {
  res.sendStatus(404);
};

module.exports = { editUser, changeAdmin, deleteUser, showUsers, fail };
