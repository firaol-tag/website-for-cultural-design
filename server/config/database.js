const mysql = require("mysql");
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "wara_technology",
    password: "wara_technology",
    database: "wara_technology",
  },
  console.log("it is connected")
);
module.exports = db;
