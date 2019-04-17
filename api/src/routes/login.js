// required modules
var express = require("express");
var router = express.Router();
var AuthController = require("../controllers/authController");


var authController = new AuthController();

// POST route for logging
router.post("/", function(req, res, next) {
  console.log(req.body)
  if (req.body.email && req.body.password) {
    var userData = {
      email: req.body.email,
      password: req.body.password
    };

    // login the user
    authController.loginUser(userData, (err, user) => {
      if (err) {
        return next(err);
      } else {
        req.session.userId = user._id;
        res.send(user);  
      }
    });
  } else {
    var err = new Error("All fields have to be filled out");
    err.status = 400;
    return next(err);
  }
});

module.exports = router;
