// required modules
var tourPackage = require("../models/tour-package");

function TourPackageController() {}

TourPackageController.prototype.getTourPackages = (callback)=>{
    tourPackage.find({}, function (err, docs) {
        if (err || !docs) {
            var err = new Error("Sorry.");
            err.status = 401;
            callback(err);
          } else {
           
            callback(null, docs);
          }
    });
}

TourPackageController.prototype.findTourPackages=(key,callback)=>{
  tourPackage.find({$text: { $search:key } },(err,docs)=>{ 
    if (err || !docs) {
      var err = new Error("Sorry.");
      err.status = 401;
      callback(err);
    } else {
      callback(null, docs);
    }
  })
}

//add tour package
TourPackageController.prototype.addTourPackage= function(userData, callback) {
  tourPackage.create(userData)
    .then(tour => callback(null, tour))
    .catch(err => callback(err));
};



module.exports = TourPackageController;

