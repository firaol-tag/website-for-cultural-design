const db = require("../../config/database");
module.exports = {
  sCompany: (data, callback) => {
    const value = [data.name, data.image];
    console.log(value);
    const sql = "INSERT INTO testimonal(name, image) VALUES (?)";
    db.query(sql, [value], (err, result) => {
      if (err) return callback(err);
      return callback(null, result);
    });
  },
  gCompany: (callback) => {
    const sql = "SELECT * FROM testimonal";
    db.query(sql, (err, result) => {
      if (err) return callback(err);
      return callback(null, result);
    });
  },
  sProject: (data, callback) => {
    const value = [data.name, data.type, data.image, data.url];
    const sql = "INSERT INTO project(name,project_type,image,url) VALUES (?)";
    db.query(sql, [value], (err, result) => {
      if (err) return callback(err);
      return callback(null, result);
    });
  },
  gProject: (callback) => {
    const sql = "SELECT * FROM project";
    db.query(sql, (err, result) => {
      if (err) return callback(err);
      return callback(null, result);
    });
  },
  gPrject: (id, callback) => {
    const sql = "SELECT * FROM project WHERE id=?";
    db.query(sql, [id], (err, result) => {
      if (err) return callback(err);
      console.log(result[0]);
      return callback(null, result[0]);
    });
  },
  updateproject: (data, callback) => {
    const sql =
      "UPDATE project SET name=?,project_type=?,image=?,url=? WHERE id=?";
    db.query(sql, [data.name, data.type,data.image, data.url, data.id], (err, result) => {
      if (err) return callback(err);
      console.log(result[0]);
      return callback(null, result[0]);
    });
  },
};
