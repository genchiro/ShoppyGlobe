const jwt = require("jsonwebtoken");
const Middleware = async(req,res,next) =>{
const num1 = req.header("Authorization");
if(!num1){
    return res.status(401).json({message:"Access Denied"});
}
try {
const num2 = jwt.verify(num1,process.env.JWTKEY);
req.user = num2;
next();
} catch (error) {
res.status(400).json({message:"Invalid Token"});
}
}
module.exports = Middleware;