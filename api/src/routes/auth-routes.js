const router = require('express').Router();
const passport = require('passport');
const authController=require('../controllers/authController')

const authCheck = (req,res,next)=>{
  if(!req.user){
    res.send(req.user);
  }else{
    next();
  }
}

// auth login page
router.get('/login',authCheck,(req,res)=>{
  res.send(req.user)
  console.log(req.user)
})

// auth logout
router.get('/logout',(req,res)=>{
    req.logOut();
    res.send({key:'logedout'})     
});

// auth with password
router.post('/password', 
  passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    res.send(req.user);
  });

// auth with google
router.get('/google',passport.authenticate('google',{
    scope:['profile']
})); 

// callback route for google to redirect to
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    // res.send(req.user)
    return res.redirect(`http://localhost:4200/profile`);
})

module.exports = router;