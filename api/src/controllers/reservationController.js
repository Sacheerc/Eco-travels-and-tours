var Reservation = require("../models/reservation");

function ReservationController() {}

// insert user data to DB
ReservationController.prototype.reserve = function(reservationData, callback) {
  Reservation.create(reservationData)
    .then(reservation => callback(null, reservation))
    .catch(err => callback(err));
};

// check tour availability
ReservationController.prototype.getReservations = (body, callback) => {
  var enddate = new Date(body.date);
  var date=new Date(body.date);
  date.setDate(date.getDate()- body.duration)
  enddate.setDate(enddate.getDate() + body.duration);
  Reservation.find(
    {
      $and: [
        {
          tourdate: {
            $gte: date,
            $lte: enddate
          }
        },
        { packageid: body.packageid }
      ]
    },
    function(err, docs) {
      if (err || !docs) {
        var err = new Error("Sorry.");
        err.status = 401;
        callback(err);
      } else {
        callback(null, docs);
      }
    }
  );
};

// get available tour guides
ReservationController.prototype.getAvailableGuides = (body, callback) => {
  var enddate = new Date(body.date);
  var date=new Date(body.date);
  date.setDate(date.getDate()- body.duration)
  enddate.setDate(enddate.getDate() + body.duration);
  Reservation.find(
    {
      tourdate: {
        $gte: date,
        $lte: enddate
      }
    },
    function(err, docs) {
      if (err || !docs) {
        var err = new Error("Sorry.");
        err.status = 401;
        callback(err);
      } else {
        callback(null, docs);
      }
    }
  );
};

// get all reservations
ReservationController.prototype.getAllReservations = callback => {
  var tourdate = { tourdate: 1 };
  Reservation.find({}, function(err, docs) {
    if (err || !docs) {
      var err = new Error("Sorry.");
      err.status = 401;
      callback(err);
    } else {
      callback(null, docs);
    }
  }).sort(tourdate);
};

module.exports = ReservationController;
