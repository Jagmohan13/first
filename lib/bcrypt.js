var bcrypt = require('bcrypt');


  module.exports=  function(req){
 var z= bcrypt.hash(req, 13) 
      return z
  }