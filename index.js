var express = require('express');
var app = express();
var middleware =
  (function(req, res, next) {
    console.log('hello middleware');
    next();
  });

app.use(middleware);
app.get('/', function(req, res) {
  res.status(200).send('helloooooo');

});
app.get('/new', function(req, res) {
  res.status(200).send('new helloooooo');

});
app.listen(5000, function() {
  console.log('server started at port 5000...')
})
