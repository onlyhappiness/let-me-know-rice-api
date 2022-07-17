const { Shop } = require("../../models/shop");

// TODO: Location x, y, thumbNail,

module.exports = async (req, res, next) => {
  const shop = new Shop(req.body);

  shop.save((err, shopInfo) => {
    if (err) {
      console.log(err);
      return res.status(500).send({
        message: "Failure to create shop",
        data: null,
      });
    }
    return res.status(200).send({
      message: "Success to create Shop",
      data: null,
    });
  });
};
