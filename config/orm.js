var connection = require("./connection.js");

// Helper function for SQL syntax.

// Object for all our SQL statement functions.
var orm = {
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log("this is the dam cb in orm", result)
    });
    // console.log("this is all", all)
  },


  
  createOne: function (name, cb) {
    var queryString = "INSERT INTO menu (name) VALUES (?)"
    // console.log(queryString);
    connection.query(queryString, [name], function (err, result) {
      if (err) {
        throw err;
      }
      // console.log("inside", result)
      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}



  update: function (eaten, id, cb) {
    var queryString = "UPDATE menu SET ? WHERE id=?;" ;
    console.log("MARK", queryString);
    connection.query(queryString, [eaten, id], function (err, result) {
      if (err) {
        throw err;
      }
      console.log("fun err")
      cb(result);
    });
  },

};

module.exports = orm;
