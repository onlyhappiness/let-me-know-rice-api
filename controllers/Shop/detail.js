const { unknownError, notFoundShop } = require("../../error/errorcode");
const { Shop } = require("../../models/shop");

// 상점 상세 get
module.exports = async (req, res, next) => {
  const objectId = req.params.id;

  const shopDetail = await Shop.findById({ _id: objectId }).populate("menus");

  if (!shopDetail) {
    return next(notFoundShop);
  }

  return res.status(200).send({
    message: "상점 상세 정보 요청",
    data: shopDetail,
  });
};
