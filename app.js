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

var DARK = process.env.DARKSKY_KEY;
app.get('/api', cache('5 minutes'), function (request, response, next) {
  console.log('Generating new response');
  axios.get(`https://api.darksky.net/forecast/${DARK}/37.8267,-122.4233`).then(function (r) {
      response.json(r.data);
  })
  .catch(next);
});

var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
