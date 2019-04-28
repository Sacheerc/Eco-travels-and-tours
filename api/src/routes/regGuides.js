// required modules
var express = require("express");
var router = express.Router();
var AuthGuideController = require("../controllers/authGuideController");

var authGuideController = new AuthGuideController();

// POST route for inserting data
router.post("/", function(req, res, next) {
    console.log(
        req.body
      );  
  if (req.body.email && req.body.name && req.body.address && req.body.phonenumber && req.body.dob && req.body.nic&& req.body.salary && req.body.tourcount && req.body.rate) {
    var guideData = {
      email: req.body.email,
      name: req.body.name,
      phonenumber: req.body.phonenumber,
      address: req.body.address,
      dob: req.body.dob,
      nic: req.body.nic,
      salary:req.body.salary,
      tourcount:req.body.tourcount,
      rate:req.body.rate
    };
    

    
    // register the guide in system
    authGuideController.registerGuide(guideData, (err,guide) => {
      if (err) {
        return next(err);
      } else {
        console.log(guideData)
        req.session.userId = guide._id;
        res.send("Done");
      }
    });
  } else {
    var err = new Error("All fields have to be filled out.");
    err.status = 400;
    return next(err);
  }
});


module.exports = router;
