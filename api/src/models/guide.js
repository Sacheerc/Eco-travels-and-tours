var mongoose = require("mongoose");

var GuideSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },

  email: {
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
  phonenumber: {
    type: Number,
    unique: true,
    trim: true,
    length: 10
  },
  nic: {
    type: String,
    unique: true,
    trim: true
  },
  dob: {
    type: String,
    trim: true,
    required: true
  },
  salary: {
    type: Number,
    trim: true,
    required: true
  },
  tourcount: {
    type: Number,
    trim: true,
    required: true,
    default: 0
  },
  rate: {
    type: Number,
    trim: true,
    required: true,
    default: 0
  },
  imgurl: {
    type: String,
    default: "No Image"
  }
});

var Guide = mongoose.model("Guide", GuideSchema);
module.exports = Guide;
