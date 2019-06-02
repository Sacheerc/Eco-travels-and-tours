
var RateGuide = require("../models/rateGuide");

function RateGuideController() {}

// insert user data to DB
RateGuideController.prototype.rateGuide = function(userData, callback) {
  RateGuide.create(userData)
    .then(rateGuide => callback(null, rateGuide))
    .catch(err => callback(err));
};


RateGuideController.prototype.getRateGuides = (req, res, next) => {
    
    // RateGuide.find({}, function(err,docs){
    //     if(err || !docs){
    //         var err = new Error("not found. ");
    //         err.status=401;
    //         callback(err);
    //     }else{
    //         callback(null, docs);
    //     }
    // }
    // )
    // RateGuide.findByNic



    User.find({rateGuide:req.params.rateGuide},(err, docs) => {
        if(!err) {res.send(docs); }
        else {console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2));}
    });
}

module.exports = RateGuideController;


