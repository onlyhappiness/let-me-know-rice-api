const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// env 사용
const dotenv = require("dotenv");
dotenv.config();

const routes = require("./routes");

const app = express();
const port = 3210;

// corsOption
const corsOption = {
  origin: "*",
  credential: true,
};

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOption));

app.use("/", routes);
app.get("/", (req, res, next) => {
  return res.status(200).send("Welcome to Let Me Know Rice Server");
});

// 없는 API 요청
app.use((req, res, next) => {
  return res.status(404).send({
    message: "API를 확인해주세요",
  });
});

app.use((err, req, res, next) => {
  // 에러 처리
  return res.status(err.status).send({
    message: err.message,
    data: {
      errorCode: err.errorCode,
    },
  });
});

const server = app.listen(port, () => {
  console.log(`서버가 ${port}로 실행 중 입니다.`);
});

module.exports = server;
