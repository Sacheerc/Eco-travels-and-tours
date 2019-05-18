var express=require('express');
var router=express.Router();
var moment=require('moment');

var Reservation = require("../models/reservation");
var Package = require("../models/tour-package");

router.get("/pkgTable",(req,res)=>{
    Reservation.aggregate([{"$group":{_id:"$packagename",
                                    guests:{$sum:"$guestcount"},
                                total:{$sum:"$price"}}}],(err,found)=>{
        if(err) {
            console.log(err);
        }
        else
        { 
            res.send(found);
        }
    });

});



router.get("/pkgIncome",(req,res)=>{
    var packages={};
    var pkgIncome={};
    
    var keys=[];

    Package.find({},(err,allPackages)=>{
        if(err) {
            console.log(err);
        }
        else
        {
            allPackages.forEach(function(pkg){
                packages[pkg._id]=[pkg.package,pkg.location];
            });
            keys=Object.keys(packages);
            var c=0;
            keys.forEach(function(key)
            {   
                
                var pkgYearly=[0,0,0,0,0,0,0,0,0,0,0,0];
                Reservation.find({payment:"true"},(err,allReservations)=>{
                    
                    allReservations.forEach(function(reserve){
                        if(reserve.packageid===key)
                        {
                            var d=moment(reserve.reserveddate);
                            pkgYearly[d.month()]+=reserve.price;
                        }
                    });
                    pkgIncome[key]=pkgYearly;
                    c++;
                    if(c==keys.length)
                    {
                        res.send([packages,pkgIncome]);
                    }
                
                });
            });
        }
    });

});

router.get("/destIncome",(req,res)=>{
    var destIncome={};
    
    Package.find({},(err,allPackages)=>{
        if(err) {
            console.log(err);
        }
        else
        {
            allPackages.forEach(function(package){
                destIncome[package.location]=0;
            });
            
            
            Reservation.find({payment:"true"},{packageid:1,price:1},(err,found)=>{
                    if(err) {
                        console.log(err);
                    }
                    else
                    {   var ctr=0
                        found.forEach(function(result){
                            
                            Package.findById(result.packageid,(err,foundPackage)=>{
                                ctr++;
                                destIncome[foundPackage.location]+=Number(foundPackage.price);
                                if(ctr===found.length)
                            {
                                res.send(destIncome);
                            }

                            });
                            
                        });
                        
                    }
                });

        }
    });

});

router.get("/ongoing",(req,res)=>{
    var ongoing=[];
    
    var days=moment().daysInMonth();
    
    for(var i=0;i<days;i++)
    {
        ongoing.push(0);
    }

    Reservation.find({payment:"true"},{tourdate:1,guestcount:1,duration:1},(err,found)=>{
        if(err) {
            console.log(err);
        }
        else
        {
            var curMonth=moment().month();

            found.forEach(function(result){
                var d=moment(result.tourdate);
                if(d.month()==curMonth){
                    for(var j=0;j<result.duration;j++){
                        ongoing[d.date()+j]+=result.guestcount;
                    }
                }
                  });
            res.send(ongoing);
        }
    });

});

router.get("/reservations",(req,res)=>{
    var reservations=[0,0,0,0,0,0,0,0,0,0,0,0];

    Reservation.find({payment:"true"},{reserveddate:1,guestcount:1},(err,found)=>{
        if(err) {
            console.log(err);
        }
        else
        {
            found.forEach(function(result){
                var d=moment(result.reserveddate);
                reservations[d.month()]+=result.guestcount;
            });
            res.send(reservations);
        }
    });

});

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
