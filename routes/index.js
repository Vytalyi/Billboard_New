var tags = require('./tags')
    , bills = require('./bills');

var routerAPI = {

	init: function (app) {
		this.app = app;

        tags.init(); // populate tags
        bills.init(); // populate bills

        /* existing pages */
		app.get('/', this.getIndex);
        app.get('/all', this.getIndex);
        app.get('/recent', this.getIndex);
        app.get('/popular', this.getIndex);
        app.get('/new-bill', this.getIndex);
        app.get('/bill-details/*', this.getIndex);

        /* respond with JSON */
        app.get('/bills', bills.getAll);
        app.get('/bills/:id', bills.get);
        app.post('/bills', bills.create);

        app.get('/tags', tags.getAll);
	},

	getIndex: function (req, res) {
		res.render('index');
	}

};

var Router = function () { };

Router.prototype = routerAPI;

module.exports = new Router();