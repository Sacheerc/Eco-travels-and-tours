var mongoose = require('mongoose');

var EmailSchema = new mongoose.Schema({
     receivermail:{
         type:String,
         required:true,
         trim:true
     },
     subject:{
         type:String,
         required:true,
         trim:true
     },
     message:{
         type:String,
         required:true,
         trim:false
     },
     sendermail:{
         type:String,
         trim:true
     },
     date:{
         type:Date,
         required:true,
         
     }

})

var Email = mongoose.model("Emails",EmailSchema)
module.exports = Email;