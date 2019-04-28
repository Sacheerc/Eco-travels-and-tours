var express=require('express');
var router=express.Router();

var Question = require("../models/question");

router.get("/",(req,res)=>{
    Question.find((err,allQuestions)=>{
        if(err) 
        {
            console.log(err);
        }else
        {res.send(allQuestions);
        console.log(allQuestions)}

    });
});

router.post("/",(req,res)=>{
    var qstn=new Question({
        title:req.body.title,
        description:req.body.description,
        author:{
            id:req.user._id,
            username:req.user.username
        }
    });

    qstn.save();

});

router.get('/:id',(req,res)=>{
    Question.findById(req.params.id,(err,question)=>{
        if(!err){res.send(question);}
        else {console.log(err);}

    })

});

router.put('/:id',(req,res)=>{
    var qstn={
        title:req.body.title,
        description:req.body.description,
        author:{
            id:req.user._id,
            username:req.user.username
        }
    };
    Question.findByIdAndUpdate(req.params.id,{$set:qstn},{new:true},(err,question)=>{
        if(!err){res.send(question);}
        else{console.log(err);}
    });
});

router.delete('/:id',(req,res)=>{
    Question.findByIdAndRemove(req.params.id,(err,question)=>{
        if(!err){res.send(question);}
        else{console.log(err);}
    })
})

module.exports=router;
