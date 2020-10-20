// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  all: (cb) => {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: (cols, vals, cb) => {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
//   delete: (condition, cb) => {
//     orm.delete("burgers", condition, function(res) {
//       cb(res);
//     });
//   }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burgers;