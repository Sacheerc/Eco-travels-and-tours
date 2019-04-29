const router = require('express').Router();
const passport = require('passport');

const authCheck = (req,res,next)=>{
    if(!req.user){
      res.send("no");
      console.log(req.user)
    }else{
      next();
    }
  }
  
  // auth login page
  router.get('/',(req,res)=>{
    res.send(req.user)
    console.log("req.session")
  })

  module.exports=router;