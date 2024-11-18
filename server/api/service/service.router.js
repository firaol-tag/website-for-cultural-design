const { setService, getService, delService, gtService, stService } = require("./service.controller");

const serviceRouter = require("express").Router();

serviceRouter.post("/setservice", setService);
serviceRouter.get("/getservice", getService);
serviceRouter.get("/gtservice/:id", gtService);
serviceRouter.post("/stservice/:id", stService);
serviceRouter.delete("/delservice/:id",delService)
module.exports = serviceRouter;
