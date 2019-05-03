const passport = require('passport');
const GoogleStrategy =require('passport-google-oauth20');
const LocalStrategy=require('passport-local')
const keys = require('./keys');
const User =require('../models/user-model');
const bcrypt = require("bcrypt");


passport.serializeUser((user,done)=>{
    console.log(user)
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    });
    
});

passport.use(
    new LocalStrategy(
    (email, password, done)=> {
      User.findOne({ email: email },(err, user)=> {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        bcrypt.compare(password, user.password, function(err, result) {
            console.log(result)
            if (result === true) {
              return done(null, user);
            } else {
                console.log('failed')
              return done(null,false);
            }
          });
      });
    }
  ));

passport.use(
    new GoogleStrategy({
        // options for strategy
        callbackURL:'/auth/google/redirect',    
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret
    },(accessToken,refreshToken,profile,done)=>{
        // check existing users
        console.log(profile)
        User.findOne({googleid:profile.id}).then((currentUser)=>{
            if(currentUser){
                // already have the user
                console.log('user is :'+ currentUser);
                done(null,currentUser);
            }else{
                // create a new user in db
                new User({
                    username:profile.displayName,
                    googleid:profile.id
                }).save().then((newUser)=>{
                    console.log('new user created: '+ newUser);
                    done(null,newUser);
                });
            }
        });    
    })
)