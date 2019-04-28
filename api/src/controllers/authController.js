// required modules
var User = require("../models/user-model");

function AuthController() {}

// insert user data to DB
AuthController.prototype.registerUser = function(userData, callback) {
  User.create(userData)
    .then(user => callback(null, user))
    .catch(err => callback(err));
};

// login authentication for user
AuthController.prototype.loginUser = function(userData, callback) {
  User.authenticate(userData.email, userData.password, (err, user) => {
    if (err || !user) {
      var err = new Error("Wrong email or password.");
      err.status = 401;
      callback(err);
    } else {
      callback(null, user);
    }
  });
};

module.exports = AuthController;
