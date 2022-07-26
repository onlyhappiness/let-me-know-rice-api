const { unknownError } = require("../error/errorcode");

tryCatch = (fn) => {
  return async (req, res, next) => {
    try {
      return await fn(req, res, next);
    } catch (err) {
      console.log(err);
      return next(unknownError);
    }
  };
};

module.exports = tryCatch;
