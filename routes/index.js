const { Router } = require("express");
const router = Router();

const user = require("./user");
const shop = require("./shop");
const menu = require("./menu");

router.use("/user", user);
router.use("/shop", shop);
router.use("/menu", menu);

module.exports = router;
