const Keyv = require("keyv");
const { db_url } = require("../config");

const db = new Keyv(db_url);

db.on("error", (err) => console.error("Keyv connection error:", err));

module.exports = db;
