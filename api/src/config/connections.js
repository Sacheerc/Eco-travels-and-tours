// required modules
var mongoose = require("mongoose");
const keys =require('./keys')

mongoose.set('useCreateIndex', true);

// Build the connection string
var dbURI =keys.mongouri.uri

// Create the database connection
mongoose.connect(dbURI,{ useNewUrlParser: true });

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on("connected", function() {
  console.log("Connection succeeded: Connected to MongoDB eco_Travels ");
});

// If the connection throws an error
mongoose.connection.on("error", function(err) {
  console.log("Mongoose default connection error: " + err);
});

// When the connection is disconnected
mongoose.connection.on("disconnected", function() {
  console.log("Mongoose default connection disconnected");
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});

// // BRING IN YOUR SCHEMAS & MODELS // For example
// require('./../model/team');
