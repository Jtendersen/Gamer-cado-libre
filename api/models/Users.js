const S = require("sequelize");
const db = require("../db/db");
const bcrypt = require("bcrypt");

class User extends S.Model {
  hash(plainPW, salt) {
    return bcrypt.hash(plainPW, salt);
  }
  validatePassword(plainPW) {
    return this.hash(plainPW, this.salt).then(
      (newHash) => newHash === this.password
    );
  }
}

User.init(
  {
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    firstName: {
      type: S.STRING,
      allowNull: false,
    },
    lastName: {
      type: S.STRING,
      allowNull: false,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
    age: {
      type: S.INTEGER,
    },
    admin: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

// Hook que hashea la contraseña de un usuario y le agrega su respectivo salt.
User.addHook("beforeCreate", (user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;
  return user.hash(user.password, user.salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = User;
