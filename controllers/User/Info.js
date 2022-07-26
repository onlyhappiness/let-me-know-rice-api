module.exports = async (req, res, next) => {
  return res.status(200).send({
    message: "유저 정보 요청",
    data: null,
  });
};
