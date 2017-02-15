'use strinct';
const express = require('express');
const bodyParser = require('body-parser');
const agreed = require('agreed-core');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());

app.options('*', cors());
app.use(cors());
app.use(agreed.middleware({
  path: './agreed/file/agreed.js',
}));

app.use((err, req, res, next) => {
  res.statusCode = 500;
  res.send(`Error is occurred : ${err}`);
});
app.listen(3000);

