const joi = require("joi");

module.exports = class Validation{
    static async SignUpValidation(data, Error) {
        return await joi.object({
            name: joi.string().required().min(3).max(64).error(new Error("Name is invalid")),
            email: joi.string().required().email().error(new Error("Email is invalid")), 
            password: joi.string().required().min(6).max(128).error(new Error("Password is invalid")), 
            username: joi.string().required().regex(/ ^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/).error(new Error("Username is invalid")), 
            gender: joi.string().required().valid("male", "email")
        }).validateAsync(data)
    }

    static async SignInValidation(data, Error) {
		return await joi
			.object({
				username: joi
					.string()
					.regex(/^[A-Za-z]{2,}[_-]?[A-Za-z0-9]{2,}$/)
					.required()
					.error(new Error(400, "Username is invalid")),
				password: joi
					.string()
					.required()
					.max(128)
					.min(5)
					.error(new Error(400, "Password is invalid")),
			})
			.validateAsync(data);
	}

}