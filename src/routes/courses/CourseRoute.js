const { CourseCreatePostController } = require("../../controllers/CourseController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const expressFileUploadMiddleware = require("express-fileupload")

const CourseRouter = require("express").Router(); 

CourseRouter.use([authMiddleware, permissionMiddleware]);
CourseRouter.post("/", expressFileUploadMiddleware(), CourseCreatePostController)

module.exports = CourseRouter;