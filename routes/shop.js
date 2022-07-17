const { Router } = require("express");
const router = Router();

const {
  shopCreate, // 음식점 등록
  shopLists, // 음식점 리스트
} = require("../controllers/index");

// 음식점 등록
router.post("/create", shopCreate);

module.exports = router;
