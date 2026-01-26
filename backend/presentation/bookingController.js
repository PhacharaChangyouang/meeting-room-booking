const express = require("express");
const router = express.Router();
const service = require("../application/bookingService");


// POST /book
router.post("/book", (req, res) => {
  const { room, time } = req.body;
  service.createBooking(room, time, () => {
    res.json({ message: "Booking success" });
  });
});

// GET /bookings
router.get("/bookings", (req, res) => {
  service.getBookings((err, rows) => {
    res.json(rows);
  });
});

module.exports = router;


