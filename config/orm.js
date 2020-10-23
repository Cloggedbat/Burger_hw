var connection = require("./connection.js");

// Helper function for SQL syntax.

// Object for all our SQL statement functions.
var orm = {
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
    
  },
  
  createOne: function (name, cb) {
    
    var queryString = "INSERT INTO menu (name) VALUES (?)";


    console.log(queryString);

    connection.query(queryString, name, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  //   delete: function(table, condition, cb) {
  //     var queryString = "DELETE FROM " + table;
  //     queryString += " WHERE ";
  //     queryString += condition;

  //     connection.query(queryString, function(err, result) {
  //       if (err) {
  //         throw err;
  //       }

  //       cb(result);
  //     });
  //   }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
