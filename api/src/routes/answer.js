var express=require('express');
var router=express.Router();

var Answer = require("../models/answer");

router.get("/",(req,res)=>{
    Answer.find((err,allAnswers)=>{
        if(err) 
        {
            console.log(err);
        }else
        {res.send(allAnswers);}
    });
});

module.exports=router;
