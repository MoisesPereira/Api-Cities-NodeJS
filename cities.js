//http://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm - Terminar a API

var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listCities', function(req, res) {
	fs.readFile(__dirname + "/" + "state.json", 'utf8', function(err, data) {
		console.log(data);
		res.header("Content-Type", "application/json; charset=utf-8");
		res.end(data);
	});
})


var server = app.listen(8500, function(){

	var host = server.address().address
	var port = server.address().port

	console.log("Acess URL http://%s:%s", host, port)
})
