module.exports = {
  // user
  userSignUp: require("./User/signup"),
  userLogin: require("./User/login"),
  userLogout: require("./User/logout"),
  userInfo: require("./User/Info"),

  // Shop
  shopCreate: require("./Shop/create"),
  shopLists: require("./Shop/lists"),
  shopInfo: require("./Shop/detail"),

  // menu
  menuCreate: require("./Menu/create"),
};
