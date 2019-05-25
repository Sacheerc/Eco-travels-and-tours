var mongoose = require("mongoose");

var TourPackageSchema = new mongoose.Schema({
  package: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: String,
    required: true,
    trim: true
  },
  reviews: {
    type: Number,
    required: true,
    trim: true
  },
  duration: {
    type: Number,
    required: true,
    trim: true
  },
  hotels: {
    type: Array,
    required: true,
    trim: true
  },
  coverimage: {
    type: String,
    required: true,
    trim: true
  },
  maxguest: {
    type: Number,
    required: true,
    trim: true
  }

});

var TourPackage = mongoose.model("Tour-package", TourPackageSchema);
module.exports = TourPackage;
