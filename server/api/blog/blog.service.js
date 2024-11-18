const db=require("./../../config/database")
module.exports = {
  sBlog: (data, callback) => {
    const value = [data.highlight, data.desc, data.imageb, data.date];
    const sql =
      "INSERT INTO blog(blog_highlight,blog_description,blog_image,blog_date) VALUES (?)";
    db.query(sql, [value], (err, result) => {
      if (err) return callback(err);
      return callback(null, result);
    });
  },
  gBlog: (callback) => {
    const sql = "SELECT * FROM blog";
    db.query(sql, (err, result) => {
      if (err) return callback(err);
      return callback(null, result);
    });
  },
  gBlg: (id, callback) => {
    const sql = "SELECT * FROM blog WHERE id=?";
    db.query(sql, [id], (err, result) => {
      if (err) return callback(err);
      return callback(null, result[0]);
    });
  },
  uBlog: (data, callback) => {
    // const value = [data.highlight, data.desc, data.imageb,data.id];
    const sql =
      "UPDATE blog SET blog_highlight=?,blog_description=? WHERE id=?";
    db.query(
      sql,
      [data.highlight, data.desc,data.id],
      (err, result) => {
        if (err) return callback(err);
        return callback(null, result[0]);
      }
    );
  },
};