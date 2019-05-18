var Guide = require("../models/guide");

function AuthGuideController() {}

// insert user data to DB
AuthGuideController.prototype.registerGuide = function(userData, callback) {
  Guide.create(userData)
    .then(guide => callback(null, guide))
    .catch(err => callback(err));
};

module.exports = AuthGuideController;


