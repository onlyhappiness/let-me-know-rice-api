const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: "1h" });
  },

  generateRefreshToken: (data) => {
    return jwt.sign(data, process.env.REFRESH_SECRET);
  },
};
