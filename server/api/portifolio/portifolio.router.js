const {getProject, getCompany, setProject, setCompany, delCompany, delProject, gtProject, updateProject } = require("./portifolio.controller");

const portifolioRouter = require("express").Router();
portifolioRouter.post("/setcompany",setCompany)
portifolioRouter.post("/setproject", setProject);
portifolioRouter.get("/getcompany", getCompany);
portifolioRouter.get("/getproject", getProject);
portifolioRouter.get("/gtproject/:id", gtProject);
portifolioRouter.post("/updateproject/:id", updateProject);
portifolioRouter.delete("/delcompany/:id", delCompany );
portifolioRouter.delete("/delproject/:id", delProject);
module.exports = portifolioRouter;
