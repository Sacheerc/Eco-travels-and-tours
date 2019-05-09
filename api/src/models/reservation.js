var mongoose= require('mongoose');

var reservationSchema = new mongoose.Schema({
    clientid:String,
    clientname:String,
    packageid:String,
    packagename:String,
    payment:{
        type:Boolean,
        default: true
    },
    reserveddate: {
        type:Date,
        default: Date.now
    },
    tourdate: {
        type:Date,
        default: Date.now
    },
    contact:String,
    guidename:{
        type:String,
        default:"Not Assigned"
    },
    guestcount:Number,
    duration:Number

});

module.exports=mongoose.model("reservation",reservationSchema);