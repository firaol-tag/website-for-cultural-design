const db = require("../../config/database");
module.exports = {
  sService: (data, callback) => {
    const sql = "INSERT INTO service(name,description,image) VALUES (?)";
    const value = [data.name, data.desc, data.images];
    db.query(sql, [value], (err, result) => {
      if (err) return callback(err);
      return callback(null, result);
    });
  },
  gService: (callback) => {
    const sql = "SELECT * FROM service";
    db.query(sql, (err, result) => {
      if (err) return callback(err);
      return callback(null, result);
    });
  },
  gSrvice: (id, callback) => {
    const sql = "SELECT * FROM service WHERE id=?";
    db.query(sql, [id], (err, result) => {
      if (err) return callback(err);
      return callback(null, result[0]);
    });
  },
 sSrvice: (data, callback) => {
    // const value = [data.highlight, data.desc, data.imageb,data.id];
    const sql =
      "UPDATE service SET name=?,description=? WHERE id=?";
    db.query(sql, [data.name, data.desc, data.id], (err, result) => {
      if (err) return callback(err);
      return callback(null, result[0]);
    });
  },
};
