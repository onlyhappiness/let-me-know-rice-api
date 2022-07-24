module.exports = {
  // 401
  noMatchUser: {
    status: 401,
    message: "아이디 또는 비밀번호를 확인해주세요",
    errorcode: "401",
  },
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
  ExistingUsers: {
    status: 401,
    message: "이미 존재하는 유저 이메일이 있습니다.",
    errorCode: "401",
  },

  // 500
  unknownError: {
    status: 500,
    message: "오류가 발생했습니다.",
    errorCode: "LetMeKnowRice999999",
  },
};
