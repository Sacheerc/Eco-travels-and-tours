var express = require("express");
var router = express.Router();
var ReservationController = require("../controllers/reservationController");

var reservationController = new ReservationController();

// POST route for inserting data
router.post("/reserve", function(req, res, next) {
  console.log(req.body);
  if (req.body) {
    var reservationData = {
      clientid: req.body.clientid,
      clientname:req.body.clientname,
      packageid: req.body.packageid,
      packagename:req.body.packagename,
      payment: req.body.payment,
      tourdate: req.body.tourdate,
      contact: req.body.contact
    };
    reservationController.reserve(reservationData, (err, reservation) => {
      if (err) {
        return next(err);
      } else {
        res.send(reservation);
      }
    });
  } else {
    var err = new Error("All fields have to be filled out.");
    err.status = 400;
    return next(err);
  }
});

// route for check tour package availabiliti
router.post("/check", function(req, res, next) {
  reservationController.getReservations(req.body, (err, docs) => {
    if (err) {
      return next(err);
    } else {
      res.json(docs);
    }
  });
});

//route for get all the reservations
router.get("/reservations", function(req, res, next) {
  reservationController.getAllReservations((err, docs) => {
    if (err) {
      return next(err);
    } else {
      res.json(docs);
    }
  });
});

module.exports = router;
