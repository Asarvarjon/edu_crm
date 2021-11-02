const { TeacherCreatePostController, TeacherUpdatePutContoller, TeacherGetController } = require("../../controllers/TeacherRouteController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const TeacherRouter = require("express").Router(); 

TeacherRouter.use([authMiddleware, permissionMiddleware]);
TeacherRouter.post("/", TeacherCreatePostController);
TeacherRouter.put("/:teacher_id", TeacherUpdatePutContoller );
TeacherRouter.get("/", TeacherGetController)

module.exports = TeacherRouter