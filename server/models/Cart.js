const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
    name : String,
    price : Number
})

const expenseModel1 = mongoose.model("store",CartSchema);
module.exports = expenseModel1; 