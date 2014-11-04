var tags = require('./tags')
    , bills = require('./bills')
    , users = require('./users');

var routerAPI = {

	init: function (app) {
		this.app = app;

        users.init(); // populate users
        tags.init(); // populate tags
        bills.init(); // populate bills

        /* existing pages */
		app.get('/', this.getIndex);
        app.get('/all', this.getIndex);
        app.get('/recent', this.getIndex);
        app.get('/popular', this.getIndex);
        app.get('/new-bill', this.getIndexAuthorizedOnly);
        app.get('/bill-details/:id', this.getIndex);

        /* respond with JSON */
        app.get('/bills', bills.getAll);
        app.get('/bills/:id', bills.get);
        app.post('/bills', bills.create);

        app.get('/tags', tags.getAll);

        app.get('/users/:id', users.get);
        app.get('/login', this.getLogin);
        app.post('/login', users.doLogin);
        app.get('/logout', users.doLogout);
	},

	getIndex: function (req, res) {
        var viewModel = {};
        if (req.session.user) {
            viewModel.user = req.session.user;
        }
		res.render('index', viewModel);
	},

    getIndexAuthorizedOnly: function (req, res) {
        var viewModel = {};
        if (req.session.user) {
            viewModel.user = req.session.user;
            res.render('index', viewModel);
        } else {
            res.redirect('/login');
        }
    },

    getLogin: function(req, res) {
        var viewModel = {};
        if (req.session.user) {
            viewModel.user = req.session.user;
        }
        res.render('login', viewModel);
    }

};

var Router = function () { };

Router.prototype = routerAPI;

module.exports = new Router();
