
var express=require("express");
var router=express.Router();
var SalarySortGuideController = require("../controllers/salarySortGuidesController");

var salarySortGuideController=new SalarySortGuideController();

router.get("/", function(req,res,next){
    salarySortGuideController.GetGuides((err,docs) => {
        if(err){
            return next(err);
        }else {
            res.json(docs);
        }
    });
    
});


module.exports=router;


