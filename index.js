"use strict";

var serveStatic = require("serve-static"),
	http = require("http"),
	finalhandler = require("finalhandler"),
    handlebars = require("handlebars"),
    moment = require("moment");

var serve = serveStatic("src/"),
	server = http.createServer(function(req, res) {
		var done = finalhandler(req, res);

		serve(req, res, done);
	});

server.listen(3000);
