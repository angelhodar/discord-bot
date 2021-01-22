const Keyv = require("keyv");

const db = new Keyv(process.env.DB_URL);

db.on("error", (err) => console.error("Keyv connection error:", err));

module.exports = db;
