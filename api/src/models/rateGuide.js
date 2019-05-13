var mongoose = require("mongoose");
var bcrypt = require("bcrypt");


var RateGuideSchema = new mongoose.Schema({
    nic: {
        type: String,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    rate:{
        type:Number,
        trim: true,
        required:true
    },

    cusname: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    phonenumber: {
        type: Number,
        unique: false,
        trim: true,
        length: 10
    }

});

var RateGuide = mongoose.model("RateGuide", RateGuideSchema);
module.exports = RateGuide;