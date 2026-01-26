const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db");

db.run(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    room TEXT,
    time TEXT
  )
`);

exports.save = (booking, callback) => {
  db.run(
    "INSERT INTO bookings(room, time) VALUES (?,?)",
    [booking.room, booking.time],
    callback
  );
};

exports.findAll = (callback) => {
  db.all("SELECT * FROM bookings", callback);
};
