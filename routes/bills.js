var Bill = require("./models/bill").Bill;

module.exports = {
    init: function () {

        Bill.collection.drop(function (err) {
            new Bill({ title: "Объявление 1", message: "Сообщение 1", tags: "Тэг 1, Тэг 2", createdDate: new Date()}).save();
            new Bill({ title: "Объявление 2", message: "Сообщение 2", tags: "Тэг 2, Тэг 1", createdDate: new Date()}).save();
            new Bill({ title: "Объявление 3", message: "Сообщение 3", tags: "Тэг 1, Тэг 3", createdDate: new Date()}).save();
            new Bill({ title: "Объявление 4", message: "Сообщение 4", tags: "Тэг 3, Тэг 1", createdDate: new Date()}).save();
        });

    },
    getRecent: function (req, res) {

        var query = Bill.find();
        query.sort('-createdDate'); // sort by ID is faster than by createdDate
        query.exec(function(error, bills){
            res.send(JSON.stringify(bills));
        });

    },

    create: function (req, res) {
        var title = req.body.title,
            content = req.body.content,
            tags = req.body.tags;

        var result = new Bill({ title: title, message: content, tags: tags, createdDate: new Date()}).save();
        res.redirect('/overview');
    }
}