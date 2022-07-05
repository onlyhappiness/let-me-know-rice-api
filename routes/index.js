const { Router } = require('express');
const router = Router();

// 유저
const user = require('./user');

// 유저 라우터
router.use('/user', user);

module.exports = router;
