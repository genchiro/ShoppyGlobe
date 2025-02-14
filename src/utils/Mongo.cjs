const mongoose = require("mongoose");
require("dotenv").config();
const connect = async() =>{
try {
await mongoose.connect(process.env.MONGOURL)
console.log("Successfully connected to mongodb");
} catch (error) {
console.log("Error ",error);
process.exit(1);
}
}
module.exports = connect;