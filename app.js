var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', function(request, response)	{
	response.redirect('/jurassicSystems.html');
});

app.listen('3000');