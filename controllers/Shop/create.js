const { Shop } = require("../../models/shop");

// TODO: Location x, y, thumbNail,

module.exports = async (req, res, next) => {
  try {
    return res.status(200).send({
      message: "음식점 등록",
      data: null,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "에러",
      data: null,
    });
  }
};
