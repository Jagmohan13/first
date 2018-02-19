// by vikul






console.log("vikul arora")

//..............


































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