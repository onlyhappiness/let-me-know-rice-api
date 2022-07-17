const { Shop } = require("../../models/shop");

module.exports = async (req, res, next) => {
  try {
    res.status(200).send({
      meessage: "리스트를 보여줘",
      data: null,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "에러",
      data: null,
    });
  }
};
