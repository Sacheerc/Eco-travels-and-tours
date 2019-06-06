var Guide = require("../models/guide");

function AuthGuideController() {}

// insert user data to DB
AuthGuideController.prototype.registerGuide = function(userData, callback) {
  Guide.create(userData)
    .then(guide => callback(null, guide))
    .catch(err => callback(err));
};

AuthGuideController.prototype.updateGuide = function (userdata, callback){
  console.log('controller update called');
  var id = {_id:userdata.id};
  var data = {
    email:userdata.email,
    name:userdata.name,
    phonenumber:userdata.phonenumber,
    address:userdata.address,
    dob:userdata.dob,
    nic:userdata.nic,
    salary:userdata.salary,
    tourcount:userdata.tourcount,
    rate:userdata.rate
    

  }
  console.log(data);
  console.log(id)
  Guide.updateOne(id,{$set: data})
  .then(guide => callback(null,guide))
  .catch(err => callback(err))

}


AuthGuideController.prototype.deleteguide= function(userdata,callback){
  console.log('delete guide');
  var id = {_id:userdata.id}

  Guide.deleteOne(id)
  .then(guide => callback(null,guide))
  .catch(err => callback(err))
  
}

module.exports = AuthGuideController;


