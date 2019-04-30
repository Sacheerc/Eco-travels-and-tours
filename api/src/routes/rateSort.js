
var express=require("express");
var router=express.Router();
var RateSortGuideController = require("../controllers/rateSortGuideController");

var rateSortGuideController=new RateSortGuideController();

router.get("/", function(req,res,next){
    rateSortGuideController.GetGuides((err,docs) => {
        if(err){
            return next(err);
        }else {
            res.json(docs);
        }
    });
    
});


module.exports=router;


