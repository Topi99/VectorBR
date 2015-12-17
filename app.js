var express = require('express');
var less = require('less');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/VectorBR");

var songSchema = {
  title:String,
  Band:String,
  imgUrl:String,
};

var Song = mongoose.model("Song", songSchema);

var app = express();

app.set("view engine", "jade");

app.use(express.static("public"));

app.get("/",function(req, res){

  /*var data = {
      title: "No es por ti",
      Band: "Comisario Pantera",
      imgUrl: "data.png"
  }

  var song = new Song(data);

  song.save(function(err){
    console.log(song);
  });*/

  res.render("index");
});

app.get("/contacto", function(req, res){
  res.render("contacto");
});

app.get("/canciones", function(req, res){
  res.render("songs/songs");
});

app.get("/songs/new", function(req, res){
  res.render("songs/new");
});

app.listen(1337);
