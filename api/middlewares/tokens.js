const jwt = require("jsonwebtoken");
const SECRET = "milanesa";

// Middleware para generar un token al usuario que se logueo.
const generateToken = (payload) => {
  const token = jwt.sign({ user: payload }, SECRET, { expiresIn: "2d" });
  return token;
};

// Middleware para verificar el token y comprobar si el SECRET coincide.
const validateToken = (token) => {
  return jwt.verify(token, SECRET);
};

// Middleware para validar si un usuario es admin.
function validateADM(req, res, next) {
  const token = req.cookies.token;
  const validateAdmin = jwt.verify(token, SECRET);
  if (validateAdmin.user.admin == true) {
    next();
  } else res.sendStatus(401);
}

module.exports = { generateToken, validateToken, validateADM };
