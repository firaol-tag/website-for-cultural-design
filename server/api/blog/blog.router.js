const { setBlog, getBlog, delBlog, getBlg, updateBlog } = require("./blog.controller");

const blogRouter=require("express").Router()
blogRouter.post("/setblog",setBlog)
blogRouter.get("/getblog", getBlog);
blogRouter.get("/getblg/:id", getBlg);
blogRouter.post("/updateblog/:id", updateBlog);
blogRouter.delete("/delblog/:id",delBlog)
module.exports=blogRouter