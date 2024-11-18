const db = require("./../../config/database");
const { allUsers, createUser, userByEmail, userById, updatepassword } = require("./user.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  userRegistration: (req, res) => {
    console.log(req.body);
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      console.log("please fill all info");
      return res.status(350).json({ msg: "please fill all info" });
    }
    if (password.length < 6) {
      console.log("password must be greater than 6");
      return res.status(400).json({ msg: "password must be greater than 6" });
    }

    db.query("SELECT * FROM user WHERE email=?", [email], (err, result) => {
      if (err) return res.status(250).json({ msg: "error occured" });
      if (result.length > 0) {
        console.log("user already exist");
        return res.status(410).json({ msg: "user already exist" });
      } else {
        const salt = bcrypt.genSaltSync();
        req.body.password = bcrypt.hashSync(password, salt);

        createUser(req.body, (err, results) => {
          if (err) return res.status(300).json({ msg: err });
          console.log(results);
          return res.json({ msg: "submitted successfully", data: results });
        });
      }
    });
  },
  userLogin: (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    if (!email || !password) {
      console.log("please fill all information");
      res.status(305).json({ msg: "please fill all information" });
    }
    userByEmail(email, (err, result) => {
      if (err) {
        console.log("error occur");
        return res.status(200).json({ msg: "error occur" });
      }
      if (!result) {
        console.log("user not found");
        return res.status(404).json({ msg: "user not found" });
      }
      console.log(result.password);
      console.log(password);

      const ismatch = bcrypt.compareSync(password, result.password);
      if (!ismatch) {
        console.log("incorrect password");
        return res.status(450).json({ msg: "incorrect password" });
      }

      // if (password != result.user_password) {
      //   console.log("incorrect password");
      //   return res.status(450).json({ msg: "incorrect password" });
      // }

      const token = jwt.sign({ id: result.id }, "jwtkey");
      return res.json({
        token,
        user: {
          firstname: result.first_name,
          lastname: result.last_name,
          email: result.email,
        },
      });
    });
  },
  users: (req, res) => {
    allUsers((err, result) => {
      if (err) {
        return res.status(250).json({ msg: "err happened" });
      }
      return res.json({ msg: "successful", data: result });
    });
  },
  userbyId: (req, res) => {
    userById(req.id, (err, result) => {
      if (err) {
        return res.status(250).json({ msg: "err happened" });
      }
      if (!result) {
        return res.status(400).json({ msg: "there is no record" });
      }
      return res.json({ msg: "success", data: result });
    });
  },
  updatepass: (req, res) => {
    const { email, newPassword, oldPassword } = req.body;
    console.log(req.body);
    if (newPassword.length < 6) {
      console.log("password must be greater than 6");
      return res.status(400).json({ msg: "password must be greater than 6" });
    }
    if (!email || !newPassword || !oldPassword) {
      return res.status(415).json({ msg: "please fill all form" });
    }
    db.query("SELECT * FROM user WHERE email=?", [email], (err, results) => {
      if (err) {
        console.log("what err");
        return res.status(375).json({ msg: "database err " });
      }
      bcrypt.compare(oldPassword, results[0].password, (err, result) => {
        if (err) {
          return res.status(370).json({ msg: "error happened " });
        } else if (result === true) {
          const salt = bcrypt.genSaltSync(10);
          req.body.newPassword = bcrypt.hashSync(newPassword, salt);
          updatepassword(req.body, (err, result) => {
            if (err) {
              return res.status(250).json({ msg: "err happened" });
            }
            return res.json({ msg: "successfully changed", data: result });
          });
        } else {
          return res
            .status(400)
            .json({ msg: "please fill correct old password" });
        }
      });
    });
  },
};
