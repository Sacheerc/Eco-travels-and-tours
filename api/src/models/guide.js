var mongoose = require("mongoose");
var bcrypt = require("bcrypt");


var GuideSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    phonenumber:{
        type:Number,
        unique:true,
        trim:true,
        length:10
    },
    nic:{
      type:String,
      unique:true,
      trim:true

    },
    age:{
        type:Number,
        trim:true,
        required:true

    },
    salary:{
      type:Number,
      trim:true,
      required:true
    }
   
  });

var Guide = mongoose.model("Guide", GuideSchema);
module.exports = Guide;