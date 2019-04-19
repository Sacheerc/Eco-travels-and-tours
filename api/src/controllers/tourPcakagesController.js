// required modules
var TourPackage = require("../models/tour-package");

function TourPackageController() {}

TourPackageController.prototype.getTourPackages = (callback)=>{
    TourPackage.find({}, function (err, docs) {
        if (err || !docs) {
            var err = new Error("Sorry.");
            err.status = 401;
            callback(err);
          } else {
            var packages = {};
            docs.forEach(function(doc) {
                packages[doc._id] = doc;
            });
            callback(null, packages);
          }
    });
}

module.exports = TourPackageController;