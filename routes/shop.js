const { Router } = require("express");
const router = Router();

const tryCatch = require("../middlewares/tryCatch");

const {
  shopCreate, // 음식점 등록
  shopLists, // 음식점 리스트
  shopInfo, // 음식점 상세
} = require("../controllers/index");

// 음식점 등록
router.post("/create", tryCatch(shopCreate));

// 음식점 리스트
router.get("/lists", tryCatch(shopLists));

// 음식점 상세
router.get("/:id", tryCatch(shopInfo));

module.exports = router;
