const mongoose = require("mongoose");

const shopSchema = mongoose.Schema({
  // 이름
  name: {
    type: String,
    required: true,
  },
  // 장소
  location: {
    type: "Point",
    coordinates: [126.8759347, 33.3765812],
  },
  // 썸네일
  thumbnail: {},
});

const Shop = mongoose.model("Shop", shopSchema);

module.exports = { Shop };
