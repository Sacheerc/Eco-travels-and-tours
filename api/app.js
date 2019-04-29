// required modules
var express = require("express");
var cors = require('cors')
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
const passport = require('passport');
const keys =require('./src/config/keys');
const passportSetup =require('./src/config/passport-setup');
const cookieSession =require('cookie-session');

// express app initialization
var app = express();

// Solved cross origin request problem
app.use(cors({
  origin:['http://localhost:4200','http://127.0.0.1:4200'],
  credentials:true
}
))

// initializing DB connection
var db = mongoose.connection;

app.use(logger("dev"));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// serve static files from template
app.use(express.static(path.join(__dirname, "public")));

// use cookie sessions for tracking logins
app.use(cookieSession({
  maxAge:24*60*60*1000,
  keys:[keys.session.cookieKey]
}))

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// required routers
// var indexRouter = require("./src/routes/index");
const authRoutes=require('./src/routes/auth-routes');
var registerRouter = require("./src/routes/register");
var tourPackageRouter=require("./src/routes/tourPackage");
var registerGuide = require("./src/routes/regGuides");
var getGuides = require("./src/routes/getGuide");
var questionRouter = require("./src/routes/question");
var dashBoard = require('./src/routes/dashboard')
//var answerRouter = require("./src/routes/answer");


// application routings
// app.use("/", indexRouter);
app.use('/auth',authRoutes);
app.use('/dashboard',dashBoard);
app.use("/register", registerRouter);
app.use("/tourPackage", tourPackageRouter);
app.use("/regGuide", registerGuide);
app.use("/getguide", getGuides); 
app.use("/qaforum",questionRouter);


app.use(express.static('public/images'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("File Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;