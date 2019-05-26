var mongoose = require("mongoose");

var GallerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  galleryimage: {
    type: String,
    required: true,
    trim: true
  }

});

var Gallery = mongoose.model("Gallery", GallerySchema);
module.exports = Gallery;


