const { user } = require('../../models/user');

module.exports = async (req, res, next) => {
  // TODO: Try-catch middleware 로 빼기
  try {
    const { email, password } = req.body;

    user.findOne({
      email: email,
      password: password,
    });

    return res.status(200).send({
      message: '로그인 성공',
      data: null,
    });

    res.status(200).send({});
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: '오류',
      data: err,
    });
  }
};
