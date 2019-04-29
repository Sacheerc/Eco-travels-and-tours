
var Guide = require("../models/guide");

function TourSortGuideController(){}

TourSortGuideController.prototype.GetGuides = (callback) => {
    var toursort = { tourcount: -1 };
    Guide.find({}, function(err,docs){
        if(err || !docs){
            var err = new Error("not found. ");
            err.status=401;
            callback(err);
        }else{
            callback(null, docs);
        }
    }
    ).sort(toursort);

    Guide.findById
    
    

}


module.exports= TourSortGuideController;

