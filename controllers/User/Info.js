const { User } = require("../../models/user");

const { isAuthorized } = require("../../middlewares/jwt");
const { unknownError, notFoundUser } = require("../../error/errorcode");

module.exports = async (req, res, next) => {
  const tokenVerify = isAuthorized(req);

  User.findById(tokenVerify, (err, info) => {
    if (err) {
      return next(unknownError);
    }

    if (!info) {
      return next(notFoundUser);
    }

    return res.status(200).send({
      message: "유저 정보 요청",
      data: info,
    });
  });
};
