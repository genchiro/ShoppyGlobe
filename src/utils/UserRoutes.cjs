const express = require("express");
const Router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./User.cjs");
Router.post("/register",async(req,res) =>{
const{name,email,password} = req.body;
const Password = await bcrypt.hash(password,10);
const newUser = new User({Name:name,Email:email,Password:Password});
await newUser.save();
res.json({message:"User Registered"});
});
Router.post("/login",async(req,res) =>{
const {email,password} = req.body;
const num1 = await User.findOne({Email:email});
if(!num1 || !(await bcrypt.compare(password,num1.Password))){
res.status(401).json({message:"Invalid Credentials"});
}
else{
const token = jwt.sign({id:num1._id},process.env.JWTKEY);
res.json(token);
}
})
module.exports = Router;