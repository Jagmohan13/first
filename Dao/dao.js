var bcrypt = require('bcrypt');


     async function findOne(model, query) {
        return model.findOne(query);
      } 

      async function find(model,query){
       return model.find(query).toArray()
      }

     var insertData= function (model,data){
          console.log(data)
          return db.collection(model).insert(data)
      }


   var join= function(collectionName1,collectionName2,email1,email2){

  return  db.collection(collectionName1).aggregate([
    // {$match:{
    //                 email1:email1
    //             }},
                { $lookup:
                   {
                     from: collectionName2,
                     localField: email1,
                     foreignField: email2,
                     as: 'User Details'
                   }
                 }
                ]).toArray()
   }

  var update= function(model,result,value){
  return model.updateOne(result, value)   
}








    //   var checkPassword= function (Model,email,req){
    //     {
    //         console.log("req:::" +req)
    //      var results=  Model.find(email);
    //      console.log("result:::" +results)

    //      try {
    //         return bcrypt.compare(req.password, results[0].password);
    //       } catch (error) {
    //         console.log("error:: 2 "+error)

    //         throw error;
    //       }
             
    //    }
         
    // }
  

module.exports={
    insertData,
    findOne,find,join,
    update
}


















































// // var find = function (condition, collectionName, field, callback) {
// //     db.collection(collectionName).find(field).toArray(function (err, result) {
// //         if (err) callback(err);
// //         else if (result.length > 0) callback(null, true)
// //         else callback(null)
// //     });
// // }

// // var insert = function (collectionName, req, cb) {
// //     db.collection(collectionName).insertOne(req, function (err, res) {
// //         if (err) throw err;
// //         else cb(null)

// //     })
// // }

// // var checkPassword = function ( p_condition, collectionName, email, loginpassword, cb) {
// //      db.collection(collectionName).find(email).toArray(function (err, results) {
// //         if (err) cb(err)
// //         else {
// //             bcrypt.compare(loginpassword, results[0].password, function (err, res) {
// //                 if (res) cb(null, true)
// //                 else cb(null)
// //             })
// //         }
// //     })
// // }

// // var updateTable = function(value,collectionName,field,cb){
// //     db.collection(collectionName).updateOne(field, value, function(err, res){
// //         if (err) cb(err)
// //         else cb(null,"updated")
// //     })
// // }

// // var join=function(collectionName1,collectionName2,emailID1,emailID2,cb){
// //     db.collection(collectionName1).aggregate([
// //         {$match:{
// //             emailID1:emailID1
// //         }},
// //         { $lookup:
// //            {
// //              from: collectionName2,
// //              localField: emailID1,
// //              foreignField: emailID2,
// //              as: 'User Details'
// //            }
// //          }
// //         ]).toArray(function(err, res) {
// //             if (err) cb (err);
// //             else cb(null,JSON.stringify(res))})
// // }



// // module.exports = {
// //     find: find,
// //     insert: insert,
// //     checkPassword: checkPassword,
// //     updateTable:updateTable,
// //     join:join
// // }




// let url=[]
// for(let i=0;i<5;i++){
// let obj={}
// obj.a=i
// url.push(obj)
// }
// console.log(url)