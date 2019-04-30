
var express=require("express");
var router=express.Router();
var TourSortGuideController = require("../controllers/tourSortGuideController");

var tourSortGuideController=new TourSortGuideController();

router.get("/", function(req,res,next){
    tourSortGuideController.GetGuides((err,docs) => {
        if(err){
            return next(err);
        }else {
            res.json(docs);
        }
    });
    
});


module.exports=router;


