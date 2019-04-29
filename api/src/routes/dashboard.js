const router = require('express').Router();
const passport = require('passport');

const authCheck = (req,res,next)=>{
    if(!req.user){
      res.send(req.user);
    }else{
      next();
    }
  }
  
  // auth page
  router.get('/',authCheck,(req,res)=>{
    res.send(req.user)
  })

  module.exports=router;