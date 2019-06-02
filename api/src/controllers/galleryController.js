// required modules
var Gallery = require("../models/gallery");
var fs = require('fs');

function GalleryController() {}

GalleryController.prototype.getGallery =(callback)=>{
  Gallery.find({}, function (err, docs) {
      if (err || !docs) {
          var err = new Error("Sorry.");
          err.status = 401;
          callback(err);
        } else {
         
          callback(null, docs);
        }
  });
}

// insert user data to DB
GalleryController.prototype.addimage = function(imageData, callback) {
    Gallery.create(imageData)
    .then(gallery => callback(null, gallery))
    .catch(err => callback(err));
};



GalleryController.prototype.delete= (key,callback,res)=>{
  console.log('this'+key)
  filePath="../api/public/images/gallery/"+key+".jpg";
  var err = new Error(key);
  // fs.unlink(filePath,callback);
  Gallery.deleteOne({name:key})
  .then(fs.unlink(filePath,callback))
  .catch(err => callback(err)) ;
  

  // Gallery.deleteOne({name:key}, (err, doc) => {
  //     if(!err) { 
  //       fs.unlink(filePath,callback);
  //       res.send(doc); 
  //     }
  //     else {console.log('Error in Insurance agent Delete :' + JSON.stringify(err, undefined, 2)); }
  // });
}
  






module.exports = GalleryController;
