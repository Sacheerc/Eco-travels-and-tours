// required modules
var express = require("express");
var FileController = require("../controllers/fileController");
var router = express.Router();
var GalleryController = require("../controllers/galleryController");

var galleryController = new GalleryController();
var fileController = new FileController();

// route for upload guideImage
router.post("/uploadimage", fileController.galleryUpload.single("file"), function(
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
    galleryController.addimage(req.body, (err, gallery) => {
    if (err) {
      return next(err);
    } else {
      res.send(gallery);
    }
  });
});


router.get("/", function(req,res,next){
    galleryController.getGallery((err,docs) => {
        if(err){
            return next(err);
        }else {
            res.json(docs);
        }
    });
    
});

//delete
router.post("/deletefile/:name", function(req, res, next) {
  console.log(req.params.name)
  galleryController.delete(req.params.name,(err, gallery) => {
      if (err) {
        return next(err);
      } else {
        res.json(gallery);  
      }
  });
});

//delete
router.post("/delete/:name", function(req, res, next) {
  console.log(req.params.name)
  galleryController.delete(req.params.name,res,(err, gallery) => {
      if (err) {
        return next(err);
      } else {
        res.json(gallery);  
      }
  });
});





module.exports = router;
