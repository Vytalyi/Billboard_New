var tags = require('./tags');

var routerAPI = {

	init: function (app) {
		this.app = app;

        tags.init(); // populate tags
	
		app.get('/', this.getIndex);
        app.get('/overview', this.getIndex);
        app.get('/new-bill', this.getIndex);

		app.get('/tags', tags.getAll);
	},

	getIndex: function (req, res) {
		res.render('index');
	}

};

var Router = function () { };

Router.prototype = routerAPI;

module.exports = new Router();