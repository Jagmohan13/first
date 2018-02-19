

// db.createCollection("Booking", {
//     validator: {
//        $jsonSchema: {
//           bsonType: "object",
//           required: [ "email", "from", "to" ],
//           properties: {
//              email: {
//                 bsonType: "string",
//                 description: "must be a string and is required"
//              },
//              from: {
//                 bsonType: "string",
//                 description: "must be a string and is required"
//              },
//              to: {
//                 bsonType: "string",
//                 description: "must be a string and is required"

//              }
//           }
//        }
//     }
//  })