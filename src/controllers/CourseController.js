const permissionChecker = require("../helpers/permissionChecker"); 
const { CourseCreateValidation } = require("../modules/validations");
const path = require("path")

module.exports = class CourseController{
    static async CourseCreatePostController(req, res,next) { 
        try { 
            permissionChecker("admin", req.user_permissions, res.error);

            if (photo && photo?.size > 5 * 1024 * 1024) {
				throw new res.error(
					400,
					"Size of photo must be less than 5 mb"
				);
			}

			const data = await CourseCreateValidation(req.body, res.error);

			let photo_name = photo
				? photo.md5 +
				  "." +
				  photo.mimetype.split("/")[
						photo.mimetype.split("/").length - 1
				  ]
				: null;

			if (photo) {
				photo.mv(
					path.join(__dirname, "..", "public", "uploads", photo_name)
				);
			}

			const course = await req.db.courses.create({
				course_name: data.name,
				course_description: data.description,
				course_price: data.price,
				course_photo: photo_name,
			});

			res.status(201).json({
				ok: true,
				message: "Course created successfully",
			});

        } catch (error) { 
            next(error)
        }
    }
      
}