var express=require('express');
var router=express.Router();

var profile = require('../models/guide')

 
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

module.exports=router;