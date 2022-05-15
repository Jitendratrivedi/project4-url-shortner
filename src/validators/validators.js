const mongoose=require('mongoose')
//validations checking function


const isValidTitle=function(value){

    if(typeof value==='undefined'||value===null) return false
    if(typeof value ==='string' && value.trim().length===0) return false
    if(['Mr','Mrs',"Miss"].indexOf(value)==-1) return false; 

    return true;

}

const isValid=function(value){

 if(typeof value==='undefined'||value===null) return false
 if(typeof value ==='string' && value.trim().length===0) return false

 return true;
}

const isValidMobileNumber=function(mobile){

if(typeof mobile === 'undefined' || mobile===null) return false
if(typeof parseInt(mobile)==='Number' && parseInt(mobile).trim().length===0) return false
if(mobile.length>10 && mobile.length<10) return false
if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(mobile)) return false
    
 return true;
}
    
const isValidRequestBody=function(requestBody){

    return Object.keys(requestBody).length>0
}

const isValidObjectId=function(ObjectId){

    return  mongoose.Types.ObjectId.isValid(ObjectId)
}

const isValidEmail=function(email){

    if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) return false

    return true;
}
const isvalidreleasedAt=function(releasedAt){
    if(!/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(releasedAt)) return false

    return true
}
// value ki jagah password for kush
const isValidPassword=function(password){

    if(typeof password=== "undefined"||password===null) return false
    if(typeof password === "string" && password.trim().length===0) return false
    if(password.length <=8 || password.length>=15) return false
    // = add krna hain kush ko

    return true;
   
}


module.exports={isValid,isValidRequestBody,isValidObjectId,isValidMobileNumber,isValidEmail,isValidTitle,isValidPassword,isvalidreleasedAt}