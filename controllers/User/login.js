const { User } = require("../../models/user");

module.exports = async (req, res, next) => {
  // TODO: Try-catch middleware 로 빼기

  const { email, password } = req.body;

  // 조건에 해당하는 첫번째 것을 쿼리
  User.findOne({
    email: email,
    password: password,
  });

  return res.status(200).send({
    message: "로그인 성공",
    data: null,
  });
};