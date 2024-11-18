const db = require("./../../config/database");
module.exports = {
  createUser: (data, callback) => {
    const value = [data.firstName, data.lastName, data.email, data.password];
    db.query(
      "INSERT INTO user(first_name,last_name,email,password) VALUES(?)",
      [value],
      (err, results) => {
        if (err) return callback(err);
        return callback(null, results);
      }
    );
  },
  userByEmail: (email, callback) => {
    db.query("SELECT * FROM user WHERE email=?", [email], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result[0]);
    });
  },
  userById: (id, callback) => {
    db.query("SELECT * FROM user WHERE id=?", [id], (err, result) => {
      if (err) return callback(err);
      return callback(null, result[0]);
    });
  },
  allUsers: (callback) => {
    db.query("SELECT * FROM user", (err, result) => {
      if (err) return callback(err);
      return callback(null, result);
    });
  },
  updatepassword: (data, callback) => {
    const sql = "  UPDATE user SET `password`=? WHERE `email`=?";
    db.query(sql, [data.newPassword, data.email], (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result[0]);
    });
  },
};
