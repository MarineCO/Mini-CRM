var express = require('express');

var app = express();

app.use(express.static('data'));

app.get('/', function(req, res) {
	res.send('hellooooo');
});

app.listen(3003, function() {
	console.log('J\'écoute !');
});