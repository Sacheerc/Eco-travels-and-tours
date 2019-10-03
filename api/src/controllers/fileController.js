var multer = require("multer");
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./public/images/tourguides");//path tp store an image
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname);
  }
});

// image upload client cover
const storage2 = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./public/images/covers");
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname);
  }
});

// image upload tour package
const storage3 = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./public/images/tourpackages");
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname);
  }
});

// image upload gallery
const storage4 = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./public/images/gallery");
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname);
  }
});

FileController.prototype.upload = multer({
  storage: storage
});

FileController.prototype.coverUpload = multer({
  storage: storage2
});

FileController.prototype.packageUpload = multer({
  storage: storage3
});

FileController.prototype.galleryUpload = multer({
  storage: storage4
});

//delete file
// FileController.prototype.delete = fs.unlink(
//   filePath, callbackFunction
// );


FileController.prototype.delete=(key,callback)=>{
  fs.unlink(
    key, callback
  )
}


function FileController() {}

module.exports = FileController;
