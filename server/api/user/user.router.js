const userRouter = require("express").Router();
const {
  users,
  userRegistration,
  userLogin,
  userbyId,
  updatepass,
} = require("./user.controller");
const auth = require("../../middleware/auth");
userRouter.post("/uregister", userRegistration);
userRouter.get("/", auth, userbyId);
userRouter.post("/login", userLogin);
userRouter.get("/all", users);
userRouter.put("/update", updatepass);
module.exports = userRouter;
