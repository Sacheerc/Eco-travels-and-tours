var express=require('express');
var router=express.Router();

var Question = require("../models/question");
var Answer = require("../models/answer");

router.get("/",(req,res)=>{
    // Question.find((err,allQuestions)=>{
    //     if(err) 
    //     {
    //         console.log(err);
    //     }else
    //     {res.send(allQuestions);
    //     console.log(allQuestions);}

    // });
     Question.find({}).populate("answers").exec(function(err,foundQuestions){
        if(err){
            console.log(err);
        }
        else{
            res.send(foundQuestions);
        }
     });
});

router.post("/",(req,res)=>{
    console.log(req.body);
    console.log("req body");
    var qstn=new Question({
        title:req.body.title,
        description:req.body.description,
        author:{
            // _id:req.user._id,
            // username:req.user.username
            _id:123456789,
            username: "tharushi"
        }
    });

    qstn.save(function(err){
        if(err) console.log(err);
        else
        {
            res.send("Question added");
        }
    });

});
router.post("/:id",(req,res)=>{
    console.log(req.body);
    console.log("req body");

    Question.findById(req.params.id,(err,question)=>{
        if(err) {
            console.log(err);
        }
        else
        {
            var ans=new Answer({
                text: req.body.text,
                author:{
                    // _id:req.user._id,
                    // username:req.user.username
                    _id:123456789,
                    username: "tharushi"
                }
            });
            ans.save();
            question.answers.push(ans);
            question.save(function(err){
                if(err) console.log(err);
                else
                {
                    res.send("Answer added to Question");
                }});
        }
    });

});

router.get('/:id',(req,res)=>{
    Question.findById(req.params.id).populate("answers").exec(function(err,foundQuestion){
        if(err){
            console.log(err);
        }
        else{
            res.send(foundQuestion);
        }
    });

});

// router.put('/:id',(req,res)=>{
//     var qstn={
//         title:req.body.title,
//         description:req.body.description,
//         author:{
//             id:req.user._id,
//             username:req.user.username
//         }
//     };
//     Question.findByIdAndUpdate(req.params.id,{$set:qstn},{new:true},(err,question)=>{
//         if(!err){res.send(question);}
//         else{console.log(err);}
//     });
// });

// router.delete('/:id',(req,res)=>{
//     Question.findByIdAndRemove(req.params.id,(err,question)=>{
//         if(!err){res.send(question);}
//         else{console.log(err);}
//     })
// })

module.exports=router;
