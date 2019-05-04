// required modules
var express = require("express");
var router = express.Router();
var TourPackageController = require("../controllers/tourPcakagesController");

var tourPackageController = new TourPackageController();

// POST route for logging
router.get("/", function(req, res, next) {
    tourPackageController.getTourPackages((err, docs) => {
        if (err) {
          return next(err);
        } else {
          res.json(docs);  
        }
    });
  });

  router.post("/findtourpackages", function(req, res, next) {
    console.log(req.body)
    tourPackageController.findTourPackages(req.body.key,(err, docs) => {
        if (err) {
          return next(err);
        } else {
          res.json(docs);  
        }
    });
  });

 

module.exports = router;