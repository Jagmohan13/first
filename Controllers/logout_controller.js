var services = require('../Services/signup_services')
var async = require('async');
const bcrypt = require('../lib/bcrypt')
var jwt = require('jsonwebtoken');


module.exports = function booking(req, res) {

    async.auto({
        checkToken: function (callback) {
            services.check('token', 'SignUp', { token: req.token }, function (err, res) {
                if (err) callback(err)
                else if (res) {
                    callback(null, "token found")
                }
                else callback("token Not Found")
            })
        },
        delete: ['checkToken', function (arg1, callback) {
            var decoder = jwt.verify(req.token,"confidential")
            var emailID = decoder.session;
            services.update({$set: {token: ""}},'SignUp',{email:emailID},function(err,res){
                if (err) {
                    callback(err)
                }
                else {
                    callback(null,"LOGOUT SUCCESFULLY")
                }
            })
        }]
    },
    
    function error(error, results) {
        if (error) {    
            res(error)
        }
        else {
            res(results)
        }
    }

)
}