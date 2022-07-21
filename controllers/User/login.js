const { unknownError } = require("../../error/errorcode");
const { generateAccessToken } = require("../../middlewares/jwt");
const { User } = require("../../models/user");

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  // 조건에 해당하는 첫번째 것을 쿼리
  User.findOne(
    {
      email: email,
      password: password,
    },
    (err, userData) => {
      if (err) {
        console.log(err);
        return next(unknownError);
      }

      const accessToken = generateAccessToken(userData?._id.toJSON());

      return res.status(200).send({
        message: "Login Success",
        data: {
          accessToken,
        },
      });
    }
  );
};
