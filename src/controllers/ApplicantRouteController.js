const permissionChecker = require("../helpers/permissionChecker");  
const { AddApplicantValidation, UpdateApplicantValidation } = require("../modules/validations");

module.exports = class ApplicantRouteController{
      static async ApplicantGetController(req, res, next) {
          try {
               permissionChecker(["admin", "operator"], req.user_permissions, res.error);

               const limit = req.query.limit || 15;
               const offset = req.query.offset - 1 || 0;
       
               const appllicants = await req.db.applicants.findAll({
                   raw: true, 
                   limit,
                   offset: offset * limit,
                   include: [
                       {
                        model: req.db.users
                       },
                       {
                           model: req.db.courses
                       }
                   ]
                        
               })
       
               res.status(200).json({
                   ok: true,
                   message: "Applicants",
                   data: {
                       appllicants
                   }
               }) 

          } catch (error) {
              next(error)
          }
      }


      static async CreateApplicantPostController(req, res, next) {
          try {
            permissionChecker(["admin", "operator"], req.user_permissions, res.error); 

            const course_id = req.params.course_id;

            const course = await req.db.courses.findOne({
                where: {
                    course_id,
                }
            }); 

            if(!course) throw new res.error(404, "Course not found");

            const data = await AddApplicantValidation(req.body, res.error);
 

            const appllicant = await req.db.applicants.create({
                applicant_name: data.name,
                applicant_description: data.description, 
                applicant_birth_date: data.birth_date, 
                applicant_gender: data.gender,
                applicant_source: data.source, 
                applicant_phone: data.phone,
                applicant_status: "waiting",
                course_id: course_id,
                user_id: req.session.user_id
            })

           

            res.status(201).json({
                ok: true,
                message: "Created succesfully"
            })


              
          } catch (error) {
              console.log(error);
              next(error)
          }
      }


      static async ApplicantPutController(req, res, next) {
          try {
            permissionChecker(["admin", "operator"], req.user_permissions, res.error);
              
            const applicant_id = req.params.applicant_id;

			const applicant = await req.db.applicants.findOne({
				where: {
					applicant_id,
				},
			});

			if (!applicant) {
				throw new res.error(404, "Course is not found");
			}

			const data = await UpdateApplicantValidation(req.body, res.error);

			await req.db.applicants.update(
				{
					applicant_name: data.name,
					applicant_gender: data.gender,
					applicant_birth_date: data.birth_date,
					applicant_description: data.description,
					applicant_phone: data.phone,
					applicant_source: data.source,
					applicant_status: data.status,
				},
				{
					where: {
						applicant_id,
					},
				}
			);

			res.status(200).json({
				ok: true,
				message: "Updated successfully",
			});
          } catch (error) {
              next(error)
          }
      }
}