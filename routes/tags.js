var Tag = require("./models/tag").Tag;

module.exports = {
    init: function () {

        Tag.collection.drop(function (err) {
            new Tag({ tagID: 1, name: "Тэг 1"}).save();
            new Tag({ tagID: 2, name: "Тэг 2"}).save();
            new Tag({ tagID: 3, name: "Тэг 3"}).save();
        });

    },
    getAll: function (req, res) {

        Tag.find(function (err, tags) {
            tags.sort({tagID: 1});
            res.send(JSON.stringify(tags));
        });

    }
}