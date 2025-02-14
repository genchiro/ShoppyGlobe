const mongoose = require("mongoose");
const Cart = mongoose.Schema({
ID :{type:mongoose.Schema.ObjectId,ref:"User",required:true},
product:[{ProductID:{type:mongoose.Schema.ObjectId,required:true},Quantity:{type:Number,min:1,required:true}}]
})
module.exports = mongoose.model("Cart",Cart);