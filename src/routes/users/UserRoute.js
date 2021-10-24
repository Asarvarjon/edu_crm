const { SignInController } = require("../../controllers/UserRouteController");

const UserRouter = require("express").Router();

UserRouter.post("/sign_in", SignInController)

module.exports = UserRouter