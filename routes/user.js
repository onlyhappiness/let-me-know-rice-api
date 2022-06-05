const { Router } = require('express');
const router = Router();

const userSchema = require('../models/user');

// 유저 회원 가입

// 유저 로그인

// 유저 정보
router.get('/', async (req, res) => {
  try {
    const user = await userSchema.find();
    res.json(user);
  } catch (err) {
    res.send('Error' + err);
  }
});
module.exports = router;
