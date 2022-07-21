module.exports = {
  // 401
  invalidToken: {
    status: 401,
    message: "올바르지 않은 토큰입니다.",
    errorCode: "401",
  },
  expireToken: {
    status: 401,
    message: "만료된 토큰입니다.",
    errorCode: "401",
  },

  // 404
  ExistingUsers: {
    status: 404,
    message: "이미 존재하는 유저 이메일이 있습니다.",
    errorcode: "404",
  },

  // 500
  unknownError: {
    status: 500,
    message: "오류가 발생했습니다.",
    errorcode: "LetMeKnowRice999999",
  },
};
