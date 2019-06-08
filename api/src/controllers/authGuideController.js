var Guide = require("../models/guide");

function AuthGuideController() {}

// insert user data to DB
AuthGuideController.prototype.registerGuide = function(userData, callback) {
  Guide.create(userData)
    .then(guide => callback(null, guide))
    .catch(err => callback(err));
};

AuthGuideController.prototype.updateGuide = function (userdata, callback){
  var id = {_id:ObjectId("5cc5898dd3f1ef43846da7a8")};
  var data = {
    address:'jubili kanuwa, nugegoda.'
  }

  Guide.update(id,{$set: data})
  .then(guide => callback(null,guide))
  .catch(err => callback(err))

}


module.exports = AuthGuideController;


