"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require("http"),
    moment = require("moment");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/notes', require('./server/router/notesRoutes'));

app.use(express.static('./client'));

app.listen(3022, function() {
    console.log('example listening on http://localhost:3022')
});

