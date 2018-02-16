var services = require('../Services/signup_services')
var async = require('async');
var jwt = require('jsonwebtoken');
var privateKey = 'confidential'


module.exports = async function update(req) {
    try {
        var decoder = await jwt.verify(req.token, privateKey)
        var email= decoder.session;
         req.email=email
        await services.checkPassword(req)
        await services.update({ email: email }, { $set: { password: req.newPassword } })
        return ("updated succesfully")
    } catch (error) {
        console.log(error)
        return error
    }
}

