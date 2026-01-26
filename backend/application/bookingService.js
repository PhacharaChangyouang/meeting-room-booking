const Booking = require("../domain/booking");
const repo = require("../data/bookingRepository");

exports.createBooking = (room, time, cb) => {
  const booking = new Booking(room, time);
  repo.save(booking, cb);
};

exports.getBookings = (cb) => {
  repo.findAll(cb);
};
