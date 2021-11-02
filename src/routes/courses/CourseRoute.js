const { CourseCreatePostController, CourseGetController, CourseUpdateController, CourseOneGetController } = require("../../controllers/CourseController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const expressFileUploadMiddleware = require("express-fileupload")

const CourseRouter = require("express").Router(); 

CourseRouter.use([authMiddleware, permissionMiddleware]);
CourseRouter.post("/", expressFileUploadMiddleware(), CourseCreatePostController);


CourseRouter.put("/:course_id", expressFileUploadMiddleware(), CourseUpdateController);

CourseRouter.get("/", CourseGetController);

CourseRouter.get("/:course_id", CourseOneGetController);


module.exports = CourseRouter;