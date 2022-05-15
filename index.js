const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const morgan = require('morgan');

const port = 3200;

const corsOption = {
  origin: ['http://localhost:3000'],
  credentials: true,
};

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOption));

app.get('/', (req, res, next) => {
  return res.status(200).send('Welcome Let-me-know-rice server');
});

app.use((req, res, next) => {
  return res.status(404).send({
    message: 'API를 확인해주세요.',
  });
});

const server = app.listen(port, () => {
  console.log(`서버가 ${port}로 실행 중 입니다.`);
});

module.exports = server;
