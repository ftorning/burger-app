var express = require("express");
// var db = require('../db/connection');
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.route("/")
    .get((req, res) => {
        burger.all(function(data) {
            var hbsObject = {
                burgers: data
            };
        
        res.render("index", hbsObject);
        });
    });

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
        } else {
        res.status(200).end();
        }
    });
});

router.post("/api/burgers", function(req, res) {
    
    var burger_name = req.body.name;
    burger.create([
        "burger_name", "devoured"
    ], [ burger_name, false], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
    });
  });
  
// Export routes for server.js to use.
module.exports = router;
