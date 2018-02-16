

db.createCollection("SignUp", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "email", "name", "phone", "password" ],
          properties: {
             email: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             name: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             phone: {
                bsonType: "string",
                description: "must be a string and is required"

             },
             password: {
                bsonType: "string" ,
                description: "must be a double and is required"
             }
          }
       }
    }
 })