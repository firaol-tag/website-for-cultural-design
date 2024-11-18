const db = require("../../config/database");
const { gBlog, sBlog, gBlg, uBlog } = require("./blog.service");

module.exports = {
  setBlog: (req, res) => {
    const { highlight, desc, date } = req.body;
    const image = req.files["imageb"][0].filename;
    const imageb = `/public/images/${image}`;
    console.log(highlight);
    console.log(date);
    console.log(image);
    if (!highlight || !desc || !image || !date) {
      return res.status(410).json({ msg: "please fill all field" });
    }
    sBlog({ highlight, desc, imageb, date }, (err, result) => {
      if (err) return res.status(430).json(err);
      return res.json({ msg: "successfuly submitted", data: result });
    });
  },
  getBlog: (req, res) => {
    gBlog((err, result) => {
      if (err) return res.status(420).json(err);
      return res.json({ msg: "successfuly fetched", data: result });
    });
  },
  getBlg: (req, res) => {
    const id = req.params.id;
    gBlg(id, (err, result) => {
      if (err) return res.status(420).json(err);
      return res.json({ msg: "successfuly fetched", data: result });
    });
  },
  updateBlog: (req, res) => {
    const id = req.params.id;
    const { highlight, desc} = req.body;
    console.log(highlight);
    if (!highlight || !desc) {
      return res.status(410).json({ msg: "please fill all field" });
    }
    uBlog({highlight, desc,id }, (err, result) => {
      if (err) return res.status(430).json(err);
      return res.json({ msg: "successfuly submitted", data: result });
    });
  },
  delBlog: (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM blog WHERE id=?";
    db.query(sql, [id], (err, result) => {
      if (err) return res.status(340).json(err);
      return res.json({ msg: "successfuly deleted", data: result });
    });
  },
};