﻿var express = require('express'),
	routes = require('./routes'),
	http = require('http'),
	path = require('path'),
	mongoose = require('mongoose');


/* Mongo initializing */
// mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://test:welcome123@troup.mongohq.com:10020/Billboard1');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("mongodb has been started");
});



/* App initializing */
var app = express();

app.configure(function () {
	app.set('port', process.env.PORT || 5000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'hbs');
	app.use(express.favicon());
	app.use(express.logger('dev'));
    app.use(express.cookieParser());
    app.use(express.session({secret: '1234567890QWERTY'}));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(require('stylus').middleware(__dirname + '/public'));
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
	app.use(express.errorHandler());
});

routes.init(app);

http.createServer(app).listen(app.get('port'), function () {
	console.log("Express server listening on port " + app.get('port'));
});

