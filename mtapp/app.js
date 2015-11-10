var express = require('express');
var url = require('url');
var http = require('http');
var unirest = require('unirest');
var md5 = require('md5');
var SimpleFileWriter = require('simple-file-writer');
var app = express();

app.get('/', function (req, res) {
	// var name = req.
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	// var username = query.u;
	// var password = query.p;
	console.log (query.u);
	console.log (query.p);
	// var uru = query.ue;
	// var digestURI = query.uri;
	console.log (query.ue);
	console.log (query.uri);
	// console.log(username + " " + password + " " + query.ue);
	







  // res.send('Hello World!' + query.u + " " + query.p);
  res.send('Hello World!');

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});