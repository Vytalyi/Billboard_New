var Bill = require("./models/bill").Bill;

module.exports = {
    init: function () {

        if (Bill.collection.count() <= 0 || true) {
            Bill.collection.drop(function (err) {
                new Bill({ title: "Объявление 1", message: "Сообщение 1", tags: "Тэг 1, Тэг 2", createdDate: new Date(), viewCount: 10, contacts: "нет"}).save();
                new Bill({ title: "Объявление 2", message: "Сообщение 2", tags: "Тэг 2, Тэг 1", createdDate: new Date(), viewCount: 5, contacts: "нет" }).save();
                new Bill({ title: "Объявление 3", message: "Сообщение 3", tags: "Тэг 1, Тэг 3", createdDate: new Date(), viewCount: 15, contacts: "нет" }).save();
                new Bill({ title: "Объявление 4", message: "Сообщение 4", tags: "Тэг 3, Тэг 1", createdDate: new Date(), viewCount: 0, contacts: "нет"}).save();
            });
        }

    },

    getAll: function (req, res) {
        var sort = req.param("sort"),
            query = Bill.find();

        // sort results if needed
        if (sort === "recent") {
            query.sort('-createdDate');
        } else if (sort === "popular") {
            query.sort('-viewCount');
        }

        query.exec(function(error, bills){
            res.send(JSON.stringify(bills));
        });

    },

    create: function (req, res) {
        var title = req.body.title,
            message = req.body.message,
            tags = req.body.tags,
            contacts = req.body.contacts;

        var bill = new Bill({ title: title, message: message, tags: tags, createdDate: new Date(), viewCount: 0, contacts: contacts });
        bill.save();
        res.send(JSON.stringify(bill));
    }
}