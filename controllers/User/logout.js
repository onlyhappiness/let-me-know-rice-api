const { User } = require("../../models/user");

module.exports = async (req, res, next) => {
  // TODO: 쿠키에 저장된 유저 정보 삭제
  return res
    .status(200)
    .clearCookie("x_auth") // 쿠키 삭제
    .send({
      message: "로그아웃",
      data: null,
    });
};
