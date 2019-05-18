var mongoose = require("mongoose");

var reservationSchema = new mongoose.Schema({
  clientid: String,
  clientname: String,
  packageid: String,
  price: Number,
  packagename: String,
  payment: {
    type: Boolean,
    default: true
  },
  reserveddate: {
    type: Date,
    default: Date.now
  },
  tourdate: {
    type: Date,
    default: Date.now
  },
  contact: String,
  guidename: {
    type: String,
    default: "Not Assigned"
  },
  guestcount: Number,
  duration: Number,
  status: {
    type: String,
    default: "active"
  },
  imgurl: String,
  email: String
});

module.exports = mongoose.model("reservation", reservationSchema);
