const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
    name : String,
    price : Number,
    quantity : Number
})

const expenseModel = mongoose.model("cart",CartSchema);
module.exports = expenseModel; 