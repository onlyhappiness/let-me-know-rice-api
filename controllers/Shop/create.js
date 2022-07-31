const { unknownError } = require("../../error/errorcode");
const { Shop } = require("../../models/shop");

// TODO: Location x, y, thumbNail,
module.exports = async (req, res, next) => {
  const shop = new Shop(req.body);

  shop.save((err, shopInfo) => {
    if (err) {
      console.log(err);
      return next(unknownError);
    }
    return res.status(200).send({
      message: "상점 등록 요청 성공",
      data: shopInfo,
    });
  });
};
