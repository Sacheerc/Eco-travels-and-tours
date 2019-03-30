// This is a sample file which used for development. Should be changed as necessary.

// required modules
var express = require("express");
var router = express.Router();
var User = require("../models/user");

// POST route for logging
router.get("/", function(req, res, next) {
  User.findById(req.session.userId).exec(function(error, user) {
    if (error) {
      return next(error);
    } else {
      if (user === null) {
        var err = new Error("Not authorized! Go back!");
        err.status = 400;
        return next(err);
      } else {
        return res.send(
          "<h1>Name: </h1>" +
            user.username +
            "<h2>Mail: </h2>" +
            user.email +
            '<br><a type="button" href="/logout">Logout</a>'
        );
      }
    }
  });
});

module.exports = router;
