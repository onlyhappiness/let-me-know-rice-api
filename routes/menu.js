const { Router } = require("express");
const router = Router();

const tryCatch = require("../middlewares/tryCatch");

const {
  menuCreate, //
} = require("../controllers/index");

// 메뉴 등록
router.post("/create", tryCatch(menuCreate));

module.exports = router;
