
var Guide = require("../models/guide");

function RateSortGuideController(){}

RateSortGuideController.prototype.GetGuides = (callback) => {
    var ratesort = { rate: -1 };
    Guide.find({}, function(err,docs){
        if(err || !docs){
            var err = new Error("not found. ");
            err.status=401;
            callback(err);
        }else{
            callback(null, docs);
        }
    }
    ).sort(ratesort);

    Guide.findById
    
}


module.exports= RateSortGuideController;

