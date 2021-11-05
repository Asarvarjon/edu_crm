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

	static async CourseCreateValidation(data, Error) {
		return await joi
			.object({ 
				name: joi.string().required().min(3).max(64).error(new Error(400, "Name is invalid")), 
				description: joi.string().required().min(64).error(new Error(400, "Description is invalid")),
				price: joi.number().required().min(0).error(new Error(400, "Price is invalid")) 
			})
			.validateAsync(data);
	}

	static async AddApplicantValidation(data, CustomError) {
		return await joi
			.object({
				name: joi
					.string()
					.min(8)
					.max(64)
					.required()
					.error(new CustomError(400, "Name is invalid")),
				description: joi
					.string()
					.error(new CustomError(400, "Description is invalid"))
					.min(64),
				birth_date: joi
					.date()
					.error(new CustomError(400, "Date is invalid"))
					.required(),
				phone: joi
					.string()
					.required()
					.error(new CustomError(400, "Phone is invalid"))
					.regex(/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/),
				gender: joi
					.string()
					.required()
					.valid("male", "female")
					.error(new Error("This option isn't available")),
				source: joi
					.string()
					.required()
					.error(new Error("Source is invalid")),
			})
			.validateAsync(data);
	}


	static async UpdateApplicantValidation(data, CustomError) {
		return await joi
			.object({
				name: joi
					.string()
					.min(8)
					.max(64)
					.error(new CustomError(400, "Name is invalid")),
				description: joi
					.string()
					.error(new CustomError(400, "Description is invalid"))
					.min(64),
				birth_date: joi
					.date()
					.error(new CustomError(400, "Date is invalid")),
				phone: joi
					.string()
					.error(new CustomError(400, "Phone is invalid"))
					.regex(/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/),
				gender: joi
					.string()
					.valid("male", "female")
					.error(new Error("This option isn't available")),
				status: joi
					.string()
					.valid("active", "waiting", "cancelled")
					.error(new Error("This option isn't available")),
				source: joi.string().error(new Error("Source is invalid")),
			})
			.validateAsync(data);
	}
	

	static async GroupCreateValidation(data, CustomError) {
		return await joi
			.object({ 
				schedule: joi
					.array()
					.items(joi.string().min(2))
					.required()
					.error(new CustomError(400, "Schedule must be array")), 
				time: joi
					.string()
					.required()
					.error(new CustomError(400, "Time is invalid")),
				lesson_duration: joi
					.number()
					.required() 
					.error(new Error("Lesson Duration is invalid")),
				status: joi
					.string()
					.required() 
					.error(new Error("Status is invalid")),
				course_duration: joi
					.number()
					.required()
					.error(new Error("Course duration is invalid")),
				teacher_id: joi
					.string()
					.required()
					.error(new CustomError(400, "Teacher id invalid")),
				course_id: joi
					.string()
					.required()
					.error(new CustomError(400, "Course_id id invalid"))
			})
			.validateAsync(data);
	}
}

