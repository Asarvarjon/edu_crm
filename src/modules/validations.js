const joi = require("joi");

module.exports = class Validation{
    static async SignUpValidation() {
        return joi.object({
            name: joi.string().required().min(3).max(64).error(new Error("Name is invalid")),
            email: joi.string().required().email().error(new Error("Email is invalid")), 
            password: joi.string().required().error(new Error("Password is invalid")), 
            username: joi.string().required().regex(/ ^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/).error(new Error("Username is invalid")), 
            gender: joi.string().required().valid("male", "email")
        })
    }

    static async SignInValidation() {
        return joi.object({ 
            password: joi.string().required().error(new Error("Password is invalid")), 
            username: joi.string().required().regex(/ ^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/).error(new Error("Username isn't available")), 
        })
    }

}