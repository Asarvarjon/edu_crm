const { GroupCreatePostController, GroupUpdatecontroller, GroupGetController, AddApplicantToGroupController } = require("../../controllers/GroupRouteController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const GroupRouter = require("express").Router(); 

GroupRouter.use([authMiddleware, permissionMiddleware]); 
GroupRouter.get("/", GroupGetController);
GroupRouter.post("/", GroupCreatePostController);
GroupRouter.put("/:group_id", GroupUpdatecontroller);
GroupRouter.post("/student", AddApplicantToGroupController)




module.exports = GroupRouter;