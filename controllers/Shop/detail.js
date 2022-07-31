const { unknownError, notFoundShop } = require("../../error/errorcode");
const { Shop } = require("../../models/shop");

// 상점 상세 get
module.exports = async (req, res, next) => {
  const objectId = req.params.id;

  Shop.findById({ _id: objectId }, (err, info) => {
    if (err) {
      return next(unknownError);
    }

    if (!info) {
      return next(notFoundShop);
    }

    return res.status(200).send({
      message: "상점 상세 정보 요청",
      data: info,
    });
  });
};
