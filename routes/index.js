const { Router } = require("express");
const router = Router();

const user = require("./user");
const shop = require("./shop");

router.use("/user", user);
router.use("/shop", shop);

module.exports = router;
