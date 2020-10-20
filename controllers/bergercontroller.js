// this page renders the handlebars page

var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burgers = require("../models/burgers.js");


router.get("/", function (req, res) {
  burgers.all(function (data) {
    var burgerObject = {
      burger: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burgers.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(["name", "black and blue"], [req.body.name, req.body.blackblue], (result) => {
      res.json({ id: result.insertID });
  });
});

// Create put route to get burgers id
router.put("/api/burgers/:id", (req, res) => {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.update(
      {
          blackblue: req.body.bbq
      },
      condition,
      (result) => {
          if (result.changedRows === 0) {
              // If no rows were changed, then the ID must not exist, so 404
              return res.status(404).end();
          }
          res.status(200).end();
      }
  );
});



router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burgers.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;


// router.put("/api/burgers/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burgers.update({
//     hungery: req.body.hungery
//   }, condition, function (result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });
