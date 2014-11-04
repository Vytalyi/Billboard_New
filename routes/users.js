var User = require("./models/user").User;

module.exports = {
    init: function () {

        User.collection.count({}, function(err, count) {
            if (count <= 0) {
                new User({ userID: 1, username: "alena", email: "alena@test.com", password: "welcome" }).save();
                new User({ userID: 2, username: "vitalii", email: "vitalii@test.com", password: "welcome" }).save();
                new User({ userID: 3, username: "test", email: "test@test.com", password: "welcome" }).save();
            }
        });

    },

    get: function (req, res) {
        var id = req.params.id,
            query;

        if (req.session.user && id === "current") {
            query = User.findOne({ userID: req.session.user.userID });
        } else {
            query = User.findOne({ userID: id });
        }

        query.select('userID username email');

        query.exec(function (err, user) {
            res.send(JSON.stringify(user));
        });
    },

    doLogin: function(req, res) {
        var email = req.body.email,
            password = req.body.password,
            query = User.findOne({ email: email, password: password });

        // todo... not use clean password
        // instead implement hash

        query.exec(function (err, user) {
            req.session.user = user;
            res.redirect('/');
        });
    },

    doLogout: function(req, res) {
        delete req.session.user;
        res.redirect('/');
    }
};
