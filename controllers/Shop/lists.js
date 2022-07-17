const { Shop } = require("../../models/shop");

module.exports = async (req, res, next) => {
  res.status(200).send({
    message: "리스트를 보여줘",
    data: null,
  });
};
