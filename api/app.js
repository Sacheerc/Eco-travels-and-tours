// required modules
var express = require("express");
var cors = require('cors')
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var logger = require("morgan");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);
var mongoose = require("mongoose");

// express app initialization
var app = express();

// Solved cross origin request problem
app.use(cors())

// initializing DB connection
var db = mongoose.connection;

app.use(logger("dev"));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

// serve static files from template
app.use(express.static(path.join(__dirname, "public")));

// use sessions for tracking logins
app.use(
  session({
    secret: "work hard",
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: db
    })
  })
);



// required routers
// var indexRouter = require("./src/routes/index");
var registerRouter = require("./src/routes/register");
var loginRouter = require("./src/routes/login");
var logoutRouter = require("./src/routes/logout");
var profileRouter = require("./src/routes/profile");
var tourPackageRouter=require("./src/routes/tourPackage");
var registerGuide = require("./src/routes/regGuides");
var getGuides = require("./src/routes/getGuide");
var rateSort = require("./src/routes/rateSort");
var salarySort = require("./src/routes/salarySort");
var tourSort = require("./src/routes/tourSort");
var questionRouter = require("./src/routes/question");
//var answerRouter = require("./src/routes/answer");



// application routings
// app.use("/", indexRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/profile", profileRouter);
app.use("/tourPackage", tourPackageRouter);
app.use("/regGuide", registerGuide);
app.use("/getguide", getGuides);
app.use("/ratesort", rateSort); 
app.use("/salarysort", salarySort);
app.use("/toursort", tourSort);
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