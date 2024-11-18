const express = require("express");
const mysql = require("mysql");
const db = require("./server/config/database");
const blogRouter=require("./server/api/blog/blog.router")
const clientRouter = require("./server/api/client/client.router");
const contactRouter = require("./server/api/contact/contact.router");
const userRouter = require("./server/api/user/user.router");
const portifolioRouter = require("./server/api/portifolio/portifolio.router");
const serviceRouter = require("./server/api/service/service.router");
const smRouter = require("./server/api/sm/sm.router");
const cors = require("cors");
const multer = require("multer");
const dotenv = require("dotenv").config();
const App = express();
App.use(express.json());
App.use(cors());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
App.use("/public", express.static("public"));
App.use("/api/blog", upload.fields([{ name: "imageb" }]),blogRouter);
App.use("/api/client", clientRouter);
App.use("/api/contact", contactRouter);
App.use("/api/user", userRouter);
App.use("/api/portifolio",upload.fields([{ name: "imagec" },{name:"imagep"}]), portifolioRouter);
App.use("/api/service", upload.fields([{ name: "image" }]), serviceRouter);
// App.use("/api/sm", smRouter);

App.listen(3050, () => {
  console.log("server is listening at port 3010");
});
