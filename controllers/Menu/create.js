const { unknownError } = require("../../error/errorcode");
const { Menu } = require("../../models/menu");
const { Shop } = require("../../models/shop");

module.exports = async (req, res, next) => {
  const menu = new Menu(req.body);
  const shopId = req.body.shopId;

  menu.save((err, menuInfo) => {
    if (err) {
      return next(unknownError);
    }

    Shop.findById({ _id: shopId }, (err, shopInfo) => {
      shopInfo.updateOne(
        {
          $push: {
            menus: [menuInfo._id],
          },
        },
        (err, data) => {
          if (err) {
            console.log(err);
            return next(unknownError);
          }

          return res.status(200).send({
            message: "메뉴 등록 성공",
            data: null,
          });
        }
      );
    });
  });
};
