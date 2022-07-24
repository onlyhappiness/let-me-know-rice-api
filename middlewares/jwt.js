const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    // FIXME:
    return jwt.sign(data, process.env.ACCESS_SECRET);
  },

  generateRefreshToken: (data) => {
    return jwt.sign(data, process.env.REFRESH_SECRET);
  },
};
