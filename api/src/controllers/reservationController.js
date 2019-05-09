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
  enddate.setDate(enddate.getDate() + body.duration);
  Reservation.find(
    {
      $and: [
        {
          tourdate: {
            $gte: body.date,
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

// get all reservations
ReservationController.prototype.getAllReservations = (callback) => {
  Reservation.find({},
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

module.exports = ReservationController;
