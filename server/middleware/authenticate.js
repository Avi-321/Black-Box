
const Users=require('../models/userSchema');
const jwt = require('jsonwebtoken')

const authenticate= async (req,res,next)=>
{
    try{
        // get the cookies
        const token=req.cookies.jwt;
        if(!token){
            res.status(401).send("No token")
        }else{
            const verifyToken= jwt.verify(token, process.env.SECRET_KEY);
            const rootUser= await Users.findOne({_id : verifyToken._id,"tokens.token" :token});
            console.log("root user: ",rootUser,"verifytoken is : ",verifyToken._id)
            if(!rootUser){
                res.status(401).send("user Not found")
            } else{
                // res.status(200).send("authorized user")
                req.myuser=rootUser;
               next(); 
            }
        }
        next();
    } catch(err){
        res.status(401).send("error")
        console.log(err);
    }
}
module.exports=authenticate;