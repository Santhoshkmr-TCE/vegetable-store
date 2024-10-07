const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const expenseModel = require("./models/Expense")
const expenseModel1 = require("./models/Cart")


const app = express()
app.use(cors())
app.use(express.json())
const api="mongodb+srv://Aadhithya:aadhi2711@grocery.gbnhdyl.mongodb.net/";

mongoose.connect("mongodb://127.0.0.1:27017/grocery");

app.post('api/additem' , (req,res) => {
    console.log(req.body);
    const {name,price,quantity} = req.body;
    expenseModel.create({name: name, price: price, quantity: quantity})
    .then(result => res.json("Items stored"))
    .catch(err => res.json(err))
})

app.post('/storecart' , (req,res) => {
    console.log(req.body);
    const {name,price} = req.body;
    expenseModel1.create({name: name, price: price})
    .then(result => res.json("Items stored"))
    .catch(err => res.json(err))
})

app.get('/showexpense',(req,res)=>{
    expenseModel.find()
    .then(results=> res.json(results))
    .catch(err=>res.json(err))
})


app.listen(3001,() => {
    console.log("Server is running")
})