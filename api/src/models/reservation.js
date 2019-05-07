var mongoose= require('mongoose');

var reservationSchema = new mongoose.Schema({
    clientid:String,
    packageid:String,
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
    }
});

module.exports=mongoose.model("reservation",reservationSchema);