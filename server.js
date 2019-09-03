var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();

app.use('/', express.static(__dirname));

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	next();
});

// app.get('/', function(req, res) {
	// res.render('index.html');
// });

app.get('*', function(req, res) {
  	res.sendfile('index.html');
});

//SERVER LISTENING
var port = process.env.PORT || 8000;

var server = app.listen(port, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Node server running at http://%s:%s. API in use: %s', host, port, app.get('env'));
}); 