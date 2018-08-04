var express = require('express');
var routes = require('../routes/routes');
var app = express();

app.use('/pi' , routes);

module.exports = app;