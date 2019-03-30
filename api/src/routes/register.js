// required modules
var express = require("express");
var router = express.Router();
var AuthController = require("../controllers/authController");

var authController = new AuthController();

// POST route for inserting data
router.post("/", function(req, res, next) {
    console.log(
        req.body
      );  
  if (req.body.email && req.body.username && req.body.password) {
    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    };

    // register the user in system
    authController.registerUser(userData, (err, user) => {
      if (err) {
        return next(err);
      } else {
        req.session.userId = user._id;
        res.redirect("/profile");
      }
    });
  } else {
    var err = new Error("All fields have to be filled out.");
    err.status = 400;
    return next(err);
  }
});

module.exports = router;
