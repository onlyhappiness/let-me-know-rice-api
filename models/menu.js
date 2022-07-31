// shop - menu
const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  // 메뉴 이름
  name: {
    type: String,
    required: true,
  },
  // 가격
  price: {
    type: Number,
    required: true,
  },
  // 사진
  // image: {},

  // shop: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Shop",
  //   },
  // ],
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = { Menu };
