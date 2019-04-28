
var Guide = require("../models/guide");

function SalarySortGuideController(){}

SalarySortGuideController.prototype.GetGuides = (callback) => {
    var salarysort = { salary: -1 };
    Guide.find({}, function(err,docs){
        if(err || !docs){
            var err = new Error("not found. ");
            err.status=401;
            callback(err);
        }else{
            callback(null, docs);
        }
    }
    ).sort(salarysort);

    Guide.findById
    
    
}

module.exports= SalarySortGuideController;

