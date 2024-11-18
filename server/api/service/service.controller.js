const db = require("../../config/database");
const { gService, sService, gSrvice, sSrvice } = require("./service.service");
module.exports = {
  setService: (req, res) => {
    const image = req.files["image"][0].filename;
    //  const imageUrl = /public/uploads/${filename};
    const images = `/public/images/${image}`;
    const { name, desc } = req.body;
    console.log(images);
    if (!name || !desc || !images)
      return res.status(450).json({ msg: "please fill all field" });
    sService({ name, desc, images }, (err, result) => {
      if (err) {
        return res.status(401).json({ msg: err });
      }
      return res.json({ data: result, msg: "successfully submitted" });
    });
  },
  getService: (req, res) => {
    gService((err, result) => {
      if (err) {
        return res.status(402).json(err);
      }
      console.log(result);
      return res.json({ msg: "succeessfully fetched", data: result });
    });
  },
  gtService: (req, res) => {
    const id = req.params.id;
    gSrvice(id, (err, result) => {
      if (err) {
        return res.status(402).json(err);
      }
      console.log(result);
      return res.json({ msg: "succeessfully fetched", data: result });
    });
  },
  stService: (req, res) => {
  const id=req.params.id
    const { name, desc } = req.body;
  
    if (!name || !desc)
      return res.status(450).json({ msg: "please fill all field" });
    sSrvice({ name, desc,id}, (err, result) => {
      if (err) {
        return res.status(401).json({ msg: err });
      }
      return res.json({ data: result, msg: "successfully submitted" });
    });
  },
  delService: (req, res) => {
    const sql = "DELETE FROM service WHERE id=?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
      if (err) return res.status(402).json({ msg: "error happened" });
      // console.log(data);
      return res.json({ msg: "successfuly deleted", data: result });
    });
  },
};
