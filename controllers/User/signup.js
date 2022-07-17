const { User } = require("../../models/user");

module.exports = async (req, res, next) => {
  const user = new User(req.body);

  // 회원 가입 시 데이터 저장
  // TODO: 1. 비밀번호 암호화 처리
  // TODO: 2. 만약 같은 email이 있으면 같은 이메일이 있다는 에러를 보냄
  user.save((err, userInfo) => {
    if (err) {
      console.log(err);
      return res.status(500).send({
        message: "회원 가입 실패",
        data: null,
      });
    }
    return res.status(200).send({
      message: "회원 가입 성공",
    });
  });
};
