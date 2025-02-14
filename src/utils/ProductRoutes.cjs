const express = require("express");
const router = express.Router();
const Product = require("./Product.cjs");
router.get("/",async (req,res) =>{
try {
const Category = req.query.Category;
const Query = Category ? {Category}:{}
const Products = await Product.find(Query);
res.json(Products);
} catch (error) {
res.status(500).json({message:"Not Found"});
}
})
router.get("/:id",async(req,res) =>{
try {
const Products = await Product.findById(req.params.id);
if(!Products){
return res.status(404).json({message:"Not Found"});
}
res.json(Products);
} catch (error) {
res.status(500).json({message:"Error Finding the Product"});
}
})
module.exports = router;