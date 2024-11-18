const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res
        .status(402)
        .json({ msg: "no token found,authorization failed" });
    }
    const verified = jwt.verify(token, "jwtkey");
    console.log(verified);
    if (!verified) {
      return res
        .status(410)
        .json({ msg: "verification failed,authorization failed" });
    }
    req.id = verified.id;
    console.log(req.id)
    next();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
module.exports = auth;
