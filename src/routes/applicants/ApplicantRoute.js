const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware"); 
const ApplicantRouter = require("express").Router(); 

ApplicantRouter.use([authMiddleware, permissionMiddleware]); 

 


module.exports = ApplicantRouter;