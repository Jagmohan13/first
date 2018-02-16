const mongodb = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbName = "db"

mongodb.connect(url, function (err, result) {
  if (err) throw err;
  console.log("Database created!");

global.db = result.db(dbName)
const user = require('./Models/signupSchema')
const booking =require('./Models/bookingSchema')
})


