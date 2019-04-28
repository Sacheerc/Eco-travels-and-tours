const passport = require('passport');
const GoogleStrategy =require('passport-google-oauth20');
const LocalStrategy=require('passport-local')
const keys = require('./keys');
const User =require('../models/user-model');

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    });
    
});

passport.use(
    new LocalStrategy(
    (username, password, done)=> {
      User.findOne({ username: username },(err, user)=> {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
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