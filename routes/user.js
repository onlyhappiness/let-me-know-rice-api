const { Router } = require("express");
const router = Router();

const tryCatch = require("../middlewares/tryCatch");

const {
  userSignUp, // 유저 회원가입
  userLogin, // 유저 로그인
  userLogout, // 유저 로그아웃
} = require("../controllers/index");

router.post("/signup", tryCatch(userSignUp));
router.post("/login", tryCatch(userLogin));
router.delete("/logout", tryCatch(userLogout));

module.exports = router;
