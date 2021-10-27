const joi = require("joi");

module.exports = class Validation {
	static async SignUpValidation(data, Error) {
		return await joi.object({
			name: joi.string().required().min(3).max(64).error(new Error("Name is invalid")), 
			password: joi.string().required().min(5).max(128).error(new Error("Password is invalid")),
			username: joi.string().required().regex(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/).error(new Error("Username is invalid")),
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

	static async AddTeacherValidation(data, Error) {
		return await joi
			.object({
				user_id: joi
					.string()
					.uuid()
					.required()
					.error(new Error(400, "Username is invalid")),
				phone: joi
					.string()
					.required().
					regex(/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/)
					.error(new Error(400, "Phone is invalid")),
				skills: joi
					.array()
					.items(joi.string().min(2).max(32))
					.required(),
			})
			.validateAsync(data);
	}

}