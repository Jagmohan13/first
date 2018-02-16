var services = require('../Services/signup_services')
var async = require('async');
var jwt = require('jsonwebtoken');
var privateKey='confidential'




module.exports= async function details(token){
    try{
        var decoder = jwt.verify(token,privateKey)
             var emailID = decoder.session;

       var result= await services.join("SignUp","Booking",emailID,emailID)
        return (result)
    }
    catch(error){
        console.log(error)

    return error
    }
    }
    














































// module.exports = function details(req, res) {

//     async.auto({
//         checkToken: function (callback) {
//             services.check('token', 'SignUp', { token: req.token }, function (err, res) {
//                 if (err) callback(err)
//                 else if (res) {
//                     callback(null, "res")}
//                 else callback("token Not Found")
//             })
//         },
//         verifyToken : ['checkToken',function(arg1,callback){
//             var decoder = jwt.verify(req.token,"confidential")
//             var emailID = decoder.session;

//             services.join('Booking','SignUp',emailID,emailID,function(err,res){
//                 if (err) callback (err)
//                 else callback(res)
//             })
//         }]

//     },
//     function error(error, results) {
//         if (error) {    
//             res(error)
//         }
//         else {
//             res(results)
//         }
//     }
// )
// }