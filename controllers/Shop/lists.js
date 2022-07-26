const { Shop } = require("../../models/shop");
const { unknownError } = require("../../error/errorcode");

module.exports = async (req, res, next) => {
  Shop.find((err, shopList) => {
    if (err) {
      console.log(err);
      return next(unknownError);
    }
    return res.status(200).send({
      message: "밥 줘 음식점 요청",
      data: shopList,
    });
  });
};
