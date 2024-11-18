const clientRouter=require("express").Router()
const {setClient,getClient}=require("./client.controller")
clientRouter.post("/setclient",setClient);
clientRouter.get("/getclient", getClient);
module.exports=clientRouter