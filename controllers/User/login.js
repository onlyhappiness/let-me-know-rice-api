const { unknownError, noMatchUser } = require("../../error/errorcode");
const { generateAccessToken } = require("../../middlewares/jwt");
const { User } = require("../../models/user");
const crypto = require("crypto-js");

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  const hash = crypto.SHA256(password, process.env.SALT).toString();

  // 조건에 해당하는 첫번째 것을 쿼리
  User.findOne(
    {
      email: email,
      password: hash,
    },
    (err, userData) => {
      if (err) {
        console.log(err);
        return next(unknownError);
      }

      if (!userData) {
        return next(noMatchUser);
      }

      const accessToken = generateAccessToken(userData?._id.toJSON());

      // TODO: 로그인 했을 경우, 쿠키에 저장
      return res
        .status(200) //
        .cookie("x_auth", accessToken) // 쿠키에 저장
        .send({
          message: "Login Success",
          data: {
            accessToken,
          },
        });
    }
  );
};
