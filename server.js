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

app.get('/download', function(req, res){
  var s = getRandomString(1);
  console.log('downloaded');
  res.send(s);
});

app.post('/upload', function(req, res){
  console.log('posted');
  res.send('done');
});

app.get('/ping', function(req, res){
  console.log('ping');
  res.send('p');
});

//tells server to listen on port 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});

function getRandomString( sizeInMb ) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        iterations = sizeInMb * 1024 * 1024, //get byte count
        result = '';
    for( var index = 0; index < iterations; index++ ) {
        result += chars.charAt( Math.floor( Math.random() * chars.length ) );
    };     
    return result;
};