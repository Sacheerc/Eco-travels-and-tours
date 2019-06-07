var express=require("express");
var router=express.Router();
var GetClientController = require("../controllers/getClientController");

var getClientController=new GetClientController();

router.get("/:id", function(req,res,next){
    getClientController.clientdata((err,docs) => {
        if(err){
            return next(err);
        }else {
            res.json(docs);
        }
    });
    
});


module.exports=router;