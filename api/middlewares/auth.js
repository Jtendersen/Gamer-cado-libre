const { validateToken } = require("./tokens");

// Middleware para validar que el token del usuario sea el correcto.
function validateAuth(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);

  const { user } = validateToken(token);
  if (!user) return res.sendStatus(401);

  req.user = user;

  next();
}

module.exports = { validateAuth };
