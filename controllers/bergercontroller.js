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
    console.log("render dam you", burgerObject);
    res.render("index", burgerObject);
  });
});





router.post("/api/burgers", function (req, res) {
  console.log("MArk")
  burgers.create(req.body.name), 
  
  function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  
  };
});




// router.post("/api/burgerscontroller", (req, res) => {
//   console.log("aj")
//   burger.create(["name", "Cheese Burger"], [req.body.name, req.body.cheeseburger], (result) => {
//       res.json({ id: result.insertID });
//   });
// });

// Create put route to get burgers id







// router.put("/api/burgers/:id", (req, res) => {
//   console.log("phill")
//   var condition = "id = " + req.params.id;
//   console.log("condition", condition);
//   burgers.update(
//       {
//           eaten: req.body.blackblue
//       },
//       condition,
//       (result) => {
//           if (result.changedRows === 0) {
//               // If no rows were changed, then the ID must not exist, so 404
//               return res.status(404).end();
//           }
//           res.status(200).end();
//       }
//   );
// });



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


