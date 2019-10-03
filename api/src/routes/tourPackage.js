// required modules
var express = require("express");
var FileController = require("../controllers/fileController");
var router = express.Router();
var TourPackageController = require("../controllers/tourPcakagesController");

var tourPackageController = new TourPackageController();
var fileController = new FileController();

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


  // route for upload guideImage
router.post("/uploadimage", fileController.packageUpload.single("file"), function(
  req,
  res,
  next
) {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});

// POST route for inserting data
router.post("/", function(req, res, next) {
  tourPackageController.addTourPackage(req.body, (err, tour) => {
    if (err) {
      return next(err);
    } else {
      res.send(tour);
    }
  });
});

router.post("/review", function(req, res, next) {
  tourPackageController.addTourPackageReview(req.body, (err, tour) => {
    if (err) {
      return next(err);
    } else {
      res.send(tour);
    }
  });
});


// POST route for logging
router.get("/review", function(req, res, next) {
  tourPackageController.getTourPackageReview((err, docs) => {
      if (err) {
        return next(err);
      } else {
        res.json(docs);  
      }
  });
});
 

module.exports = router;


