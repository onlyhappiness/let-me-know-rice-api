const mongoose = require("mongoose");

const shopSchema = mongoose.Schema({
  // 이름
  name: {
    type: String,
    required: true,
  },
  // 장소
  location: {
    type: {
      // 도로명..?
      type: String,
      default: "Point",
    },
    // 위도 및 경도
    coordinates: [Number],
  },
  category: {
    type: String,
    required: true,
  },

  // // 썸네일
  // thumbnail: {},
});

const Shop = mongoose.model("Shop", shopSchema);

module.exports = { Shop };
