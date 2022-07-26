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

  isAuthorized: (req, res, next) => {
    const authorization = req?.headers?.authorization;
    const token = authorization.split(" ")[1];

    try {
      const data = jwt.verify(token, process.env.ACCESS_SECRET);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};
