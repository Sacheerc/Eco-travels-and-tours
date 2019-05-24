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
  origin:['http://localhost:4200','http://127.0.0.1:4200','http://localhost:8080','http://127.0.0.1:8080'],
  credentials:true
}
));

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
const authRoutes=require('./src/routes/auth-routes');
var registerRouter = require("./src/routes/register");
var tourPackageRouter=require("./src/routes/tourPackage");
var registerGuide = require("./src/routes/regGuides");
var getGuides = require("./src/routes/getGuide");
var rateSort = require("./src/routes/rateSort");
var salarySort = require("./src/routes/salarySort");
var tourSort = require("./src/routes/tourSort");
var questionRouter = require("./src/routes/question");
var dashBoard = require('./src/routes/dashboard');
var reservationRoutes = require('./src/routes/reservation');
var guideProfile = require('./src/routes/guideProfile');
var sendMail = require("./src/routes/sendMail");
var adminRouter = require('./src/routes/admin');


// application routings
app.use('/auth',authRoutes);
app.use('/dashboard',dashBoard);
app.use("/register", registerRouter);
app.use("/tourPackage", tourPackageRouter);
app.use("/regGuide", registerGuide);
app.use("/getguide", getGuides);
app.use("/ratesort", rateSort); 
app.use("/salarysort", salarySort);
app.use("/toursort", tourSort); 
app.use("/qaforum",questionRouter);
app.use("/reservation",reservationRoutes);
app.use("/guideProfile/", guideProfile);
app.use("/sendmail", sendMail);
app.use("/admin",adminRouter);


// Config image url path
app.use(express.static('public/images'));
app.use('/admin',express.static('public/admin'));
app.use(express.static('public/client'));


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

