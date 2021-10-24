const { SignInValidation } = require("../modules/validations")

module.exports = class UserController{
    static async SignInController(req, res, next) {
        try { 
            console.log(req.body);
            const {username, password} = await SignInValidation(req.body, res.error)
            console.log(username, password);
        } catch (error) { 
            next(error)
        }
    }
}