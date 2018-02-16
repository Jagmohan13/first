var services = require('../Services/signup_services')
var async = require('async');
var jwt = require('jsonwebtoken');
var privateKey='confidential'


module.exports= async function login(req) {

    try{
        await services.check({email:req.email})
       await services.checkPassword(req)
      var user =   await services.find({email:req.email})
      console.log(user)
        var token=  await jwt.sign({ session: req.email }, privateKey ,{expiresIn: 300});
        user.token=token

        req.token = token;
        return(user);
       
    }
       catch(error){
        console.log("error::  "+error)

        return (error)
    }

}
