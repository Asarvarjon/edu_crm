const { SignInController, CreateUserController } = require("../../controllers/UserRouteController");

const UserRouter = require("express").Router();

UserRouter.post("/sign_in", SignInController);
UserRouter.post("/account", CreateUserController)

module.exports = UserRouter