const router = require('express').Router();
const passport = require('passport');

// auth logout
router.get('/logout',(req,res)=>{
    // handle with passport
    req.logOut();  
    res.redirect('/');
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
    res.send(req.user)
})

module.exports = router;