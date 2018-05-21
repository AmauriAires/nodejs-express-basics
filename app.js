var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.get('/', (req, res, next) => {
  res.send('Hello world!');
});

app.listen(3000, () => {
  console.log('Server started on potr 3000');
});