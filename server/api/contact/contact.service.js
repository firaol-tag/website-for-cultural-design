const db = require("./../../config/database");
module.exports = {
  sContact: (data, callback) => {
    const value = [data.address, data.email, data.phone, data.telegram];
    const mysql =
      "INSERT INTO contact_info(address,email,phone,telegram_contact) VALUES (?)";
    db.query(mysql, [value], (err, result) => {
      if (err) return callback(err);
      return callback(null, result);
    });
  },
  gContact: (callback) => {
    const mysql = "SELECT * FROM contact_info";
    db.query(mysql, (err, result) => {
      if (err) return callback(err);
      return callback(null, result);
    });
  },
  gCntact: (id, callback) => {
    const mysql = "SELECT * FROM contact_info WHERE id=?";
    db.query(mysql, [id], (err, result) => {
      if (err) return callback(err);
      return callback(null, result[0]);
    });
  },
  sCntact: (data, callback) => {
    // const value = [data.highlight, data.desc, data.imageb,data.id];
    const sql =
      "UPDATE contact_info SET address=?,email=?,phone=?,telegram_contact=? WHERE id=?";
    db.query(
      sql,
      [data.address, data.email, data.phone, data.telegram,data.id],
      (err, result) => {
        if (err) return callback(err);
        return callback(null, result[0]);
      }
    );
  },
};
