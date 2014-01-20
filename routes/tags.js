﻿var Tag = require("./models/tag").Tag;

module.exports = {
    init: function () {

        if (Tag.collection.count() <= 0 || true) {
            Tag.collection.drop(function (err) {
                new Tag({ tagID: 1, name: "Детский мир"}).save();
                new Tag({ tagID: 2, name: "Недвижимость"}).save();
                new Tag({ tagID: 3, name: "Транспорт"}).save();
                new Tag({ tagID: 4, name: "Работа"}).save();
                new Tag({ tagID: 5, name: "Животные"}).save();
                new Tag({ tagID: 6, name: "Электроника"}).save();
                new Tag({ tagID: 7, name: "Услуги"}).save();
                new Tag({ tagID: 8, name: "Мода и стиль"}).save();
                new Tag({ tagID: 9, name: "Дом и сад"}).save();
                new Tag({ tagID: 10, name: "Бизнес"}).save();
            });
        }

    },
    getAll: function (req, res) {

        var query = Tag.find();
        query.sort('tagID');
        query.exec(function(error, tags){
            res.send(JSON.stringify(tags));
        });

    }
}