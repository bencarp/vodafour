var express = require("express");
var http = require("http");

var port = process.argv[2];
var app = express();

// Port manually set to 3000, change to 'port' in production
app.use(express.static(__dirname + "/public"));
http.createServer(app).listen(3000);

var index = require('./routes/index.js');
app.use('/', index);