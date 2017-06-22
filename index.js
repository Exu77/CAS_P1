"use strict";

var express = require('express');
var app = express();

var http = require("http"),
    moment = require("moment");

app.get('/', (req, res, next) => {
    console.log('bla');
	return res.redirect('/index.html');

});

app.use('/notes', require('./server/router/notesRoutes'));

app.use(express.static('./src'));

app.listen(3022, function() {
    console.log('example listening on http://localhost:3022')
});
