const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const routes = require('./routes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3200;

const corsOption = {
  origin: ['http://localhost:3000'],
  credentials: true,
};

const mongoose = require('mongoose');
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('연결됨'))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOption));

app.use('/', routes);
app.get('/', (req, res, next) => {
  return res.status(200).send('Welcome');
});

// 없는 API 요청
app.use((req, res, next) => {
  return res.status(404).send({
    message: 'API를 확인해주세요.',
  });
});

const server = app.listen(port, () => {
  console.log(`서버가 ${port}로 실행 중 입니다.`);
});

module.exports = server;
