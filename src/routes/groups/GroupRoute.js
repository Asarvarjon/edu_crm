const { GroupCreatePostController, GroupUpdatecontroller, GroupGetController, AddApplicantToGroupController, UpdateStudentPutController, DeleteStudentFromGroupController, GroupStudentsGetController } = require("../../controllers/GroupRouteController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const GroupRouter = require("express").Router(); 

GroupRouter.use([authMiddleware, permissionMiddleware]); 
GroupRouter.get("/", GroupGetController);
GroupRouter.post("/", GroupCreatePostController);
GroupRouter.put("/:group_id", GroupUpdatecontroller);
GroupRouter.post("/student", AddApplicantToGroupController);  

//
GroupRouter.put("/student/:applicant_id", UpdateStudentPutController);
GroupRouter.delete("/student/:student_id", DeleteStudentFromGroupController);
GroupRouter.get("/:group_id", GroupStudentsGetController)






module.exports = GroupRouter;