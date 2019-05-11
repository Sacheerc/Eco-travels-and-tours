var express=require('express');
var router=express.Router();
var moment=require('moment');

var Reservation = require("../models/reservation");
var Answer = require("../models/answer");


router.get("/income",(req,res)=>{
    var income=[0,0,0,0,0,0,0,0,0,0,0,0];

    Reservation.find({payment:"true"},{reserveddate:1,price:1},(err,found)=>{
        if(err) {
            console.log(err);
        }
        else
        {
            found.forEach(function(result){
                var d=moment(result.reserveddate);
                income[d.month()]+=result.price;
            });
            res.send(income);
        }
    });

});

module.exports=router;
