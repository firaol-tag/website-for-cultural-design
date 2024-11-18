const { setContact, getContact, delContact, gtContact, stContact } = require("./contact.controller");

const contacttRouter = require("express").Router();
contacttRouter.post("/setcontact", setContact);
contacttRouter.get("/getcontact", getContact);
contacttRouter.get("/gtcontact/:id", gtContact);
contacttRouter.post("/updatecontact/:id", stContact);
contacttRouter.delete("/delcontact/:id", delContact);
module.exports=contacttRouter
