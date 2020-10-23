// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  all: function (cb){
    
    orm.all("menu", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  // create: (name, cb) => {
    //  console.log("does this work", "menu")
    
    //   orm.create(name, (res) => {
      //     console.log(res)
      //     cb(res);
      //   });
      // },
      create: (name, cb) => {
        // console.log(cb)
        
        orm.createOne(name, (res) => {
            cb(res);
          });
        },




  // update: (objColVals, condition, cb) => {
  //   orm.update("menu", objColVals, condition, function(res) {
  //     cb(res);
  //   });
  // },
//   delete: (condition, cb) => {
//     orm.delete("burgers", condition, function(res) {
//       cb(res);
//     });
//   }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burgers;

