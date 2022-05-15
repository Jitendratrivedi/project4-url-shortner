const userModel = require("../models/UserModel")

let jwt=require("jsonwebtoken");
const { findById } = require("../models/UserModel");
const bookModel=require("../models/BookModel")


const auth1 = async function (req, res, next) {
  
    try{
    let token = req.headers["X-api-key"];
    if(!token) token = req.headers["x-api-key"]
    if (!token) {
      return res.status(400).send({ status: false, message: "KINDLY ADD TOKEN" });
    }
    
    const decodedtoken = jwt.verify(token, "Group-52");
    
    req.decodedtoken = decodedtoken;
  
  
    next();
  }catch(error){
    res.status(403).send({status: false,message:"INVALID SIGNATURE"})
  }}






  
  const auth2=async function(req,res,next){
    try{
        let token=req.headers["x-api-key"]
        let decodedToken=jwt.verify(token,"Group-52")
        
        
        let data=decodedToken.userId 
        let bookId=req.params.bookId 
        let variable= await bookModel.findById(bookId).select({userId:1})
        let userID=variable.userId
        if(userID){  
            if(data==userID){
                
                next();
            }
            else{
                return res.status(403).send({status:false,message:"cannot access other's account"})

        
            }}}
            
catch(err){
    return res.status(500).send({status:false,message:err.message})
}}


module.exports.auth1=auth1
module.exports.auth2=auth2