const db=require("./../../config/database")
module.exports = {
  sClient: (data, callback) => {
    const value = [
      data.name,
      data.email,
      data.country,
      data.phone,
      data.message,
    ];
    const mysql =
      "INSERT INTO client_contact(`name`, `email`, `country`, `phone`, `message`) VALUES (?)";
    db.query(mysql, [value], (err, result) => {
      if (err) return callback(err);
      return callback(null, result);
    });
  },
  gClient: (callback) => {
    const mysql = "SELECT * FROM client_contact";
    db.query(mysql, (err, result) => {
      if (err) return callback(err);
      return callback(null, result);
    });
  },
};