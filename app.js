var express = require('express');
var app = express();
var apicache = require('apicache');
var cache = apicache.middleware;

var axios = require('axios');

app.set('view engine', 'hbs');


app.use('/axios', express.static('node_modules/axios/dist'));

app.get('/', function (request, response) {
  response.render('home.hbs', {});
});

app.get('/api', cache('5 minutes'), function (request, response) {
  console.log('Generating new response');
  axios.get('https://api.darksky.net/forecast/b651ed0ee8d5810d8dcea9f8151817b6/37.8267,-122.4233').then(function (r) {
      response.json(r.data);
  });
});

app.listen(8000, function () {
  console.log('Listening on port 8000');
});
