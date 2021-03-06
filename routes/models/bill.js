var mongoose = require("mongoose");

var BillSchema = new mongoose.Schema({
    billID: Number,
    title: String,
    message: String,
    tags: String,
    createdDate: Number,
    createdBy: Number,
    viewCount: Number,
    contacts: String,
    images: String
});

var Bill = mongoose.model("Bill", BillSchema);

module.exports = {
    Bill: Bill
};
