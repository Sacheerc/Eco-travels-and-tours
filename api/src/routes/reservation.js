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
      packageid: req.body.packageid,
      payment: req.body.payment,
      tourdate:req.body.tourdate
    };
    reservationController.reserve(reservationData, (err, reservation) => {
      if (err) {
        return next(err);
      } else {
        res.send(reservation)
      }
    });
  } else {
    var err = new Error("All fields have to be filled out.");
    err.status = 400;
    return next(err);
  }
});

router.post("/check", function(req, res, next) {
    reservationController.getReservations(req.body.date,(err, docs) => {
        if (err) {
          return next(err);
        } else {
          res.json(docs);  
        }
    });
  });

module.exports = router;