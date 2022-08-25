const jwt = require("jsonwebtoken");
const SECRET = "milanesa";

const generateToken = (payload) => {
  const token = jwt.sign({ user: payload }, SECRET, { expiresIn: "2d" });
  return token;
};

const validateToken = (token) => {
  return jwt.verify(token, SECRET);
};

function validateADM(req, res, next) {
  const token = req.cookies.token;
  const validateAdmin = jwt.verify(token, SECRET);
  if (validateAdmin.user.admin == true) {
    next();
  } else res.sendStatus(401);
}

module.exports = { generateToken, validateToken, validateADM };
