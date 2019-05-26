// required modules
var Gallery = require("../models/gallery");

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






// GalleryController.prototype.findgallery=(key,callback)=>{
//     Gallery.find({$text: { $search:key } },(err,docs)=>{ 
//     if (err || !docs) {
//       var err = new Error("Sorry.");
//       err.status = 401;
//       callback(err);
//     } else {
//       callback(null, docs);
//     }
//   })
// }




module.exports = GalleryController;
