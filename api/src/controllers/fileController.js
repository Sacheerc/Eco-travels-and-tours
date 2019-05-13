var multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./public/images/tourguides");
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname);
  }
});

FileController.prototype.upload = multer({
  storage: storage
});

function FileController() {}

module.exports = FileController;
