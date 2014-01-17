var tags = require('./tags')
    , bills = require('./bills');

var routerAPI = {

	init: function (app) {
		this.app = app;

        tags.init(); // populate tags
        bills.init(); // populate bills

        /* existing pages */
		app.get('/', this.getIndex);
        app.get('/overview', this.getIndex);
        app.get('/new-bill', this.getIndex);

        /* respond with JSON */
		app.get('/tags', tags.getAll);
        app.get('/bills', bills.getRecent);
        app.post('/new-bill', bills.create);
	},

	getIndex: function (req, res) {
		res.render('index');
	}

};

var Router = function () { };

Router.prototype = routerAPI;

module.exports = new Router();