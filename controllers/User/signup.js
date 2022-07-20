const { unknownError, ExistingUsers } = require("../../error/errorcode");
const { User } = require("../../models/user");

module.exports = async (req, res, next) => {
  const user = new User(req.body);

  // 회원 가입 시 데이터 저장
  // TODO: 1. 만약 같은 email이 있으면 같은 이메일이 있다는 에러를 보냄
  // TODO: 2. 비밀번호 암호화 처리
  User.findOne(
    {
      email: user.email,
    },
    (err, userData) => {
      if (userData) {
        return next(ExistingUsers);
      }

      user.save((err, userInfo) => {
        if (err) {
          console.log(err);
          return next(unknownError);
        }
        // 패스워드 암호화
        // console.log("userInfo====", userInfo.password);
        return res.status(200).send({
          message: "회원 가입 성공",
          data: null,
        });
      });
    }
  );
};
