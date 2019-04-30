
var GetGuide = require("../models/guide");

function GetGuideController(){}

GetGuideController.prototype.GetGuides = (callback) => {
    
    GetGuide.find({}, function(err,docs){
        if(err || !docs){
            var err = new Error("not found. ");
            err.status=401;
            callback(err);
        }else{
            callback(null, docs);
        }
    }
    )

    GetGuide.findById
    


}


module.exports= GetGuideController;

