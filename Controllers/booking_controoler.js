
var services = require('../Services/signup_services')
var async = require('async');
const bcrypt=require('../lib/bcrypt')
var jwt = require('jsonwebtoken');



module.exports= async function booking(req,token){
    try{
    var decoder = jwt.verify(token,"confidential")
            var emailID = decoder.session;
    await services.insert("Booking",req)
    return ("Booking Successful")
}
catch(error){
    console.log(error)
return error
}
}





