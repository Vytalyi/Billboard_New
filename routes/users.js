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
