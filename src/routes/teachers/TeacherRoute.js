const { TeacherCreatePostController } = require("../../controllers/TeacherRouteController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const TeacherRouter = require("express").Router(); 

TeacherRouter.use([authMiddleware, permissionMiddleware]);
TeacherRouter.post("/", TeacherCreatePostController);

module.exports = TeacherRouter