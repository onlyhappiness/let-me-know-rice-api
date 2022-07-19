const mongoose = require("mongoose");

const shopSchema = mongoose.Schema({
  // 이름
  name: {
    type: String,
    required: true,
  },
  // 장소
  // location: {
  //   type: {
  //     type: String,
  //     default: "Point",
  //   },
  //   coordinates: [Number],
  // },
  // // 썸네일
  thumbnail: {
    data: Buffer,
    contentType: String,
  },
});

const Shop = mongoose.model("Shop", shopSchema);

module.exports = { Shop };
