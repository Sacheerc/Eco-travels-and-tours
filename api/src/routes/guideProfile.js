var express=require('express');
var router=express.Router();
var AuthGuideController = require("../controllers/authGuideController");

var profile = require('../models/guide')
var authGuideController = new AuthGuideController();
 
router.get('/:id',(req,res)=>{
    console.log('router called')
    profile.findById(req.params.id).populate("guides").exec(function(err,profileDeatils){
        if(err){
            console.log(err);
        }
        else{
            res.send(profileDeatils);
        }
    });

});



router.post("/delete", function(req, res, next) {
    console.log('delete called');
    authGuideController.deleteguide(req.body, (err, guide) => {
      if (err) {
        return next(err);
      } else {
        res.send(guide);
      }
    });
  });


module.exports=router;