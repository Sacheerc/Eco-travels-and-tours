// required modules
var User = require("../models/user-model");

function AuthController() {}

// insert user data to DB
AuthController.prototype.registerUser = function(userData, callback) {
  User.create(userData)
    .then(user => callback(null, user))
    .catch(err => callback(err));
};


module.exports = AuthController;
