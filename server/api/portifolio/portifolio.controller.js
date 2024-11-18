
const db = require("../../config/database");
const multer = require("multer");
const path = require("path");
const { sCompany, gCompany, sProject, gProject, gPrject, updateproject } = require("./portifolio.service");

module.exports = {
  setCompany: (req, res) => {
    const { name } = req.body;
    const imagec = req.files["imagec"][0].filename;
    const image = `/public/images/${imagec}`;
    //  console.log(req.body)
    console.log(image);
    sCompany({ name, image }, (err, result) => {
      if (err) return res.status(405).json({ msg: err });
      console.log(result);
      return res.json({ msg: "submitted successfully", data: result });
    });
  },
  getCompany: (req, res) => {
    gCompany((err, result) => {
      if (err) return res.status(405).json({ msg: err });
      console.log(result);
      return res.json({ msg: "successfully fetched", data: result });
    });
  },
  delCompany: (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM testimonal WHERE id=?";
    db.query(sql, [id], (err, result) => {
      if (err) return res.status(402).json({ msg: "error happened" });
      // console.log(data);
      return res.json({ msg: "successfuly deleted", data: result });
    });
  },
  setProject: (req, res) => {
    const { name, type, url } = req.body;
    const imagep = req.files["imagep"][0].filename;
    const image = `/public/images/${imagep}`;
    console.log(req.body);
    sProject({ name, type, image, url }, (err, result) => {
      if (err) return res.status(350).json({ msg: err });
      return res.json({ msg: "successfuly submitted", data: result });
    });
  },
  getProject: (req, res) => {
    gProject((err, result) => {
      if (err) return res.status(402).json({ msg: err });
      return res.json({ msg: "successfuly fetched", data: result });
    });
  },
  gtProject: (req, res) => {
    const id = req.params.id;
    gPrject(id, (err, result) => {
      if (err) return res.status(402).json({ msg: err });
      return res.json({ msg: "successfuly fetched", data: result });
    });
  },
  updateProject: (req, res) => {
    const id = req.params.id;
    const {name,type,url}=req.body
const imagep = req.files["imagep"][0].filename;
const image = `/public/images/${imagep}`;
  updateproject({name,type,image,url,id}, (err, result) => {
      if (err) return res.status(402).json({ msg: err });
      return res.json({ msg: "successfuly fetched", data: result });
    });
  },
  delProject: (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM project WHERE id=?";
    db.query(sql, [id], (err, result) => {
      if (err) return res.status(402).json({ msg: "error happened" });
      // console.log(data);
      return res.json({ msg: "successfuly deleted", data: result });
    });
  },
};
