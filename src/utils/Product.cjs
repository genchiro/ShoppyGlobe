const mongoose = require("mongoose");
const Products = mongoose.Schema({
ID:{type:Number,required:true,unique:true},
name:{type:String,required:true},
price:{type:Number,required:true},
description:{type:String,required:true},
rating:{type:Number,max:5,min:0},
thumbnail:{type:String,required:true},
category:{type:String,required:true}
});
module.exports = mongoose.model("Ayush1",Products);