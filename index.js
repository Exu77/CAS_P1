"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require("http"),
    moment = require("moment");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res, next) => {
    console.log('bla ' + req.href);
	return res.redirect('/index.html');
});

app.use('/notes', require('./server/router/notesRoutes'));

app.use(express.static('./src'));

app.listen(3022, function() {
    console.log('example listening on http://localhost:3022')
});

