var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.listen(3000, function(){
  console.log("Server running on port 3000");
});

app.get('/', function(req, res){
  res.sendfile("public/index.html");
});
