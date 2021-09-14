var jwt = require("jsonwebtoken");
const moment = require("moment");

var validarTokenFn = function (req, res, next) {
  const token = req.headers["authorization"];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.sendStatus(403);
    }
    next();
  });
};

module.exports = { validarTokenFn };
