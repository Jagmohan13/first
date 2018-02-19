

var bcrypts = require('bcrypt');
const dao = require('../Dao/dao')
const bcrypt = require('../lib/bcrypt')
var signupTable = require('../Constants/index').dataBase.table
var ConstantMsg = require('../Constants').errorMessage



async function existingUser(email, phone) {
  const Model = db.collection(signupTable.user)
  try {
    const criteria = {
      $or: [{ email }, { phone }],
    };
    //  signup  ,  email
    let checkData = await dao.findOne(Model, criteria);
    checkData = JSON.parse(JSON.stringify(checkData));
    if (!checkData) {
      return checkData;
    } else if (checkData.email === email) {
      throw ConstantMsg.emailExist;
    } else if (checkData.phone === phone) {
      throw ConstantMsg.mobileExist;
    }
  } catch (error) {
    throw error;
  }
}

async function insert(collectionName, req) {
  // const Model= db.collection(signupTable.user) 
  return await dao.insertData(collectionName, req)
}



async function check(req) {
  const Model = db.collection(signupTable.user)
  try {


    if (await dao.findOne(Model, req)) {
      return true
    } else {
      throw error
    }


  } catch (error) {
    throw (" not valid")
  }
}

async function checkPassword(req) {
  var Model = db.collection(signupTable.user)

  // try{
  //   var result=await dao.find(Model,email)
  //   console.log(result)

  //    return (await bcrypt.compare(pass,result[0].password))
  //       } catch(error) {
  //       throw error
  //   }
  try {

    var result = await dao.find(Model, {email:req.email});
    var z= (await bcrypts.compare(req.password, result[0].password))
    if(z===true)   {  return z} 
    else     {throw error
    }


  }
  catch (error) {
    throw ConstantMsg.passwordNotMatched
  }


}



async function update(email,value){
  const Model = db.collection(signupTable.user)

   var results= await dao.find(Model,email)
   return await dao.update(Model,results.email,value)
}

async function find(req){
  const Model = db.collection(signupTable.user)
  try{

  return await dao.findOne(Model,req)
  }
  catch(error){
    throw error
  }
}

module.exports = {
  existingUser,
  insert,
  check,
  checkPassword,
  join,
  find,
  update
  
}







