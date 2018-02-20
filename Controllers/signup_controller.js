
var services = require('../Services/signup_services')
var async = require('async');
var bcrypt = require('../lib/bcrypt')

// signup
module.exports=async function signup(req) {
    try {
      
        await services.existingUser(req.email, req.phone)
       
        var encrypt_pass=await bcrypt(req.password)
            information = {
            email: req.email,
            phone: req.phone,
            name: req.name,
            password: encrypt_pass
        }
      var user= await services.insert("SignUp",information)
      
             return ("registered:::" + req.name)
    } catch (error) {
        console.log("error   "+error)
        return (error)
    }
}
    

















