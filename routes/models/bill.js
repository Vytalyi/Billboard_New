var mongoose = require("mongoose");

var BillSchema = new mongoose.Schema({
    billID: Number,
    title: String,
    message: String,
    tags: String,
    createdDate: Date
});

var Bill = mongoose.model("Bill", BillSchema);

module.exports = {
    Bill: Bill
}