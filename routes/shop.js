const { Router } = require("express");
const router = Router();

const tryCatch = require("../middlewares/tryCatch");

const {
  shopCreate, // 음식점 등록
  shopLists, // 음식점 리스트
} = require("../controllers/index");

// 음식점 등록
router.post("/create", tryCatch(shopCreate));

// 음식점 리스트
router.get("/lists", tryCatch(shopLists));

module.exports = router;
