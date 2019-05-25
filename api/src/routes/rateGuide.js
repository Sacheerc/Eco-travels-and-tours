// required modules
var express = require("express");
var router = express.Router();
var RateGuideController = require("../controllers/rateGuideController");

var rateGuideController = new RateGuideController();

// POST route for inserting data
router.post("/", function(req, res, next) {
    console.log(
      req.body
    );  
  if (req.body.nic && req.body.description && req.body.rate && req.body.cusname && req.body.email && req.body.phonenumber) {
    var userData = {
        nic: req.body.nic,
        description: req.body.description,
        rate: req.body.rate,
        cusname: req.body.cusname,
        email: req.body.email,
        phonenuber: req.body.phonenuber
    };

    // rate guide 
    rateGuideController.rateGuide(userData, (err, user) => {
      if (err) {
        return next(err);
      } else {
        req.session.nic = user.nic;
        res.redirect("/rateGuide");
      }
    });
  } else {
    var err = new Error("All fields have to be filled out.");
    err.status = 400;
    return next(err);
  }
});


router.get("/", function(req,res,next){
  rateGuideController.getRateGuides((err,docs) => {
      if(err){
          return next(err);
      }else {
          res.json(docs);
      }
  }); 
});


router.get("/find", function(req,res,next){
  rateGuideController.findRateGuides((err,docs) => {
      if(err){
          return next(err);
      }else {
          res.json(docs);
      }
  }); 
});



module.exports = router;

