// required modules
var express = require("express");
var router = express.Router();
var TourPackageController = require("../controllers/tourPcakagesController");

var tourPackageController = new TourPackageController();

// POST route for logging
router.get("/", function(req, res, next) {
    tourPackageController.getTourPackages((err, packages) => {
        if (err) {
          return next(err);
        } else {
          res.send(packages);  
        }
    });
  });

module.exports = router;