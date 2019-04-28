
var express=require("express");
var router=express.Router();
var GetGuideController = require("../controllers/GetGuideController");

var getGuideController=new GetGuideController();

router.get("/", function(req,res,next){
    getGuideController.GetGuides((err,docs) => {
        if(err){
            return next(err);
        }else {
            res.json(docs);
        }
    });
    
});

module.exports=router;


