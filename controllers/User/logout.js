const { User } = require("../../models/user");

module.exports = async (req, res, next) => {
  return res.status(200).send({
    message: "로그아웃 시도 중",
    data: null,
  });
};
