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
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = { Menu };
