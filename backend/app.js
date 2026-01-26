const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const path = require("path");
const bookingController = require("./presentation/bookingController");

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend folder
app.use(express.static(path.join(__dirname, "../frontend")));

// Database
const db = new sqlite3.Database("database.db");

// Create tables
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS rooms (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      capacity INTEGER,
      equipment TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      room_id INTEGER,
      title TEXT,
      time TEXT
    )
  `);
});

// Seed data (optional, if not already inserted)
db.run(`INSERT INTO rooms (name, capacity, equipment)
VALUES ('Room A', 6, 'Projector,TV'),
       ('Room B', 10, 'TV')`);

// Routes
app.get("/rooms", (req, res) => {
  db.all("SELECT * FROM rooms", [], (err, rows) => {
    res.json(rows);
  });
});

app.post("/bookings", (req, res) => {
  const { room_id, title, time } = req.body;
  db.run(
    "INSERT INTO bookings (room_id, title, time) VALUES (?, ?, ?)",
    [room_id, title, time],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      console.log(`🔔 Smart Notification: Meeting booked in room ${room_id} at ${time}`);
      res.json({ message: "Booking confirmed", booking_id: this.lastID });
    }
  );
});

app.get("/bookings", (req, res) => {
  db.all("SELECT * FROM bookings", [], (err, rows) => {
    res.json(rows);
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
