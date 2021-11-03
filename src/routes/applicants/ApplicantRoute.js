const { ApplicantGetController, CreateApplicantPostController, ApplicantPutController } = require("../../controllers/ApplicantRouteController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware"); 
const ApplicantRouter = require("express").Router(); 

ApplicantRouter.use([authMiddleware, permissionMiddleware]); 

ApplicantRouter.get("/", ApplicantGetController);



ApplicantRouter.post("/:course_id", CreateApplicantPostController);
ApplicantRouter.put("/:applicant_id", ApplicantPutController);


 


module.exports = ApplicantRouter;