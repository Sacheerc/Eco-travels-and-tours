var mongoose = require("mongoose");

var GallerySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  description: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  galleryimage: {
    type: String,
    unique: true,
    required: true,
    trim: true
  }

});

var Gallery = mongoose.model("Gallery", GallerySchema);
module.exports = Gallery;


