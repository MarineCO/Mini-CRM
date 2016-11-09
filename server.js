var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(express.static('data'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send('hellooooo');
});

app.post('/createCustomer', function(req, res) {

	fs.readFile('data/crm.json', 'utf8', function(err, data) {
		
		if (err) {
			return console.log(err);
		}
		console.log('check');

		var body = req.body;
		console.log(body);

		body.id = data.customers.length+1;
		console.log(body.id);

		data.customers.push(body);

		var newCustom = JSON.stringify(data);

		fs.writeFile('data/crm.json', newCustom, 'utf8', function(err, data) {
			if(err) {
				return console.log(err);
			}
		})

	});

});

app.listen(3003, function() {
	console.log('J\'écoute !');
});