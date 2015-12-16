var express = require('express');
var less = require('less');

var app = express();

app.set("view engine", "jade");

app.use(express.static("public"));

app.get("/",function(req, res){
  res.render("index");
});
app.get("/contacto", function(req, res){
  res.render("contacto");
});

app.listen(1337);
