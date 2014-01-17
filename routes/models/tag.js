var mongoose = require("mongoose");

var TagSchema = new mongoose.Schema({
    tagID: Number,
    name: String
});

var Tag = mongoose.model("Tag", TagSchema);

module.exports = {
    Tag: Tag
}