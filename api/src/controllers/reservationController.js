var Reservation = require("../models/reservation");

function ReservationController() {}

// insert user data to DB
ReservationController.prototype.reserve = function(reservationData, callback) {
  Reservation.create(reservationData)
    .then(reservation => callback(null, reservation))
    .catch(err => callback(err));
};

ReservationController.prototype.getReservations = (date,callback)=>{
    var enddate=new Date(date);
    enddate.setDate(enddate.getDate()+2)
    console.log(enddate)
    Reservation.find({
        tourdate: {
            $gte: date,
            $lt: enddate
        }
    }, function (err, docs) {
        if (err || !docs) {
            var err = new Error("Sorry.");
            err.status = 401;
            callback(err);
          } else {
           
            callback(null, docs);
          }
    });
}


module.exports = ReservationController;
