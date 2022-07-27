const mongoose = require("mongoose");
const crypto = require("crypto-js");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 15,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  // token: {
  //   type: String,
  // },
  // tokenExp: {
  //   type: Number,
  // },
});

// 비밀번호 암호화
userSchema.pre("save", function (next) {
  let user = this;

  if (this.password) {
    const hash = crypto.SHA256(this.password, process.env.SALT).toString();
    this.password = hash;
    next();
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
