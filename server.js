var app = require('express')();
var path = require("path");
var express = require("express");
var http = require('http').Server(app);

//for hosting static images on the page
app.use('/images', express.static(__dirname + "/images"));

//hosts html page
app.get('/', function(req, res){
  res.sendFile(__dirname + '/speed.html');
});

//tells server to listen on port 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});