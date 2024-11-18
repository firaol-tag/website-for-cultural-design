const { setSocialMedia, getSocialMedia } = require("./sm.controller")

const smRouter=require("express").Router()
smRouter.post("/setsocialmedia",setSocialMedia)
smRouter.get("/getsocialmedia",getSocialMedia)
module.exports=smRouter