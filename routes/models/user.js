var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    userID: Number,
    username: String,
    email: String,
    password: String
});

var User = mongoose.model("User", UserSchema);

module.exports = {
    User: User
};
