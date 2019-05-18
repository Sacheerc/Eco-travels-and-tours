var express = require("express");
var router = express.Router();
var ReservationController = require("../controllers/reservationController");

var reservationController = new ReservationController();

// POST route for inserting data
router.post("/reserve", function(req, res, next) {
  if (req.body) {
    reservationController.reserve(req.body, (err, reservation) => {
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

// route for check tour package availability
router.post("/check", function(req, res, next) {
  reservationController.getReservations(req.body, (err, docs) => {
    if (err) {
      return next(err);
    } else {
      res.json(docs);
    }
  });
});

// route for check guides availability
router.post("/checkguides", function(req, res, next) {
  reservationController.getAvailableGuides(req.body, (err, docs) => {
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

// route for assign tourguides for reservations
router.post("/assignguides", (req, res, next) => {
  reservationController.assignTourGuides(req.body, (err, result) => {
    if (err) {
      return next(err);
    } else {
      res.send(result);
    }
  });
});

router.post("/changestatus", (req, res, next) => {
  console.log(req.body);
  reservationController.changeStatus(req.body, (err, result) => {
    if (err) {
      return next(err);
    } else {
      res.send(result);
    }
  });
});

router.post("/myreservations", (req, res, next) => {
  console.log(req.body);
  reservationController.getMyReservations(req.body.clientid, (err, result) => {
    if (err) {
      return next(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
