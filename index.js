var express = require('express');
var app = express();
var fs = require('fs')
const spdy = require('spdy');

app.get('/', function (req, res) {
  res.send('hello, http2!');
});

var options = {
  key: fs.readFileSync('../dev.localhost.com/key.pem'),
  cert: fs.readFileSync('../dev.localhost.com/cert.pem')
};

var server = spdy.createServer(options, app)
server.listen(443);