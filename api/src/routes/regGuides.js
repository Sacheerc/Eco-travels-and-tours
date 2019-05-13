// required modules
var express = require("express");
var FileController = require("../controllers/fileController");
var router = express.Router();
var AuthGuideController = require("../controllers/authGuideController");

var authGuideController = new AuthGuideController();
var fileController = new FileController();

// route for upload guideImage
router.post("/uploadimage", fileController.upload.single("file"), function(
  req,
  res,
  next
) {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});

// POST route for inserting data
router.post("/", function(req, res, next) {
  authGuideController.registerGuide(req.body, (err, guide) => {
    if (err) {
      return next(err);
    } else {
      res.send(guide);
    }
  });
});

module.exports = router;
