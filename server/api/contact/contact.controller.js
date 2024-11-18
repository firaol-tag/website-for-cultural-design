const db = require("../../config/database");
const { sContact, gContact, gCntact, sCntact } = require("./contact.service");

module.exports = {
  setContact: (req, res) => {
    const { address, email, phone, telegram } = req.body;
    if (!address || !email || !telegram || !phone) {
      return res.status(400).json({ msg: "please fill all form" });
    }
    sContact(req.body, (err, result) => {
      if (err) return res.status(405).json({ msg: err });
      console.log(result);
      return res.json({ msg: "submitted successfully", data: result });
    });
  },
  getContact: (req, res) => {
    gContact((err, result) => {
      if (err) return res.status(405).json({ msg: err });
      console.log(result);
      return res.json({ msg: "fetched successfully", data: result });
    });
  },
  gtContact: (req, res) => {
    const id = req.params.id;
    gCntact(id, (err, result) => {
      if (err) return res.status(405).json({ msg: err });
      console.log(result);
      return res.json({ msg: "fetched successfully", data: result });
    });
  },
  stContact: (req, res) => {
  const id=req.params.id
    const { address, email, phone, telegram } = req.body;
    console.log(req.body)
    if (!address || !email || !telegram || !phone) {
      return res.status(400).json({ msg: "please fill all form" });
    }
    sCntact({ address, email, phone, telegram ,id}, (err, result) => {
      if (err) return res.status(405).json({ msg: err });
      console.log(result);
      return res.json({ msg: "submitted successfully", data: result });
    });
  },
  delContact: (req, res) => {
    const sql = "DELETE FROM contact_info WHERE id=?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
      if (err) return res.status(402).json({ msg: "error happened" });
      // console.log(data);
      return res.json({ msg: "successfuly deleted", data: result });
    });
  },
};
