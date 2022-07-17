const { User } = require("../../models/user");

module.exports = async (req, res, next) => {
  try {
    return res.status(200).send({
      message: "로그아웃 시도 중",
      data: null,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "오류",
      data: err,
    });
  }
};
