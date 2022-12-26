const jwt = require('jsonwebtoken')
require('dotenv').config()

const authenticateUser = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization;
  if (!token)
    return res
      .status(403)
      .json({ success: false, message: "you are not authenticated" });
  else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, payload) => {
      if (error) return res.status(403).json({ error: error.message });
      req.receptionist = payload;
      res.set({ Authorization: token });
      next();
    });
  }
};

module.exports = {
    authenticateUser
}