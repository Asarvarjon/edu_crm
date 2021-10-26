const { SignInValidation, SignUpValidation } = require("../modules/validations");
const { createToken } = require("../modules/jwt");
const { generateHash } = require("../modules/bcrypt")

module.exports = class UserController{
    static async SignInController(req, res, next) {
        try {  
            const {username, password} = await SignInValidation(req.body, res.error) 

            const user = await req.db.users.findOne({
                where: {
                    user_username: username
                },
                raw: true
            })

            if(!user) throw new res.error(400, "User not found");

            await req.db.sessions.destroy({
                where: {
                    session_userAgent: req.headers["user-agent"],
                    user_id: user.user_id
                }
            })
            const session = await req.db.sessions.create({
                session_userAgent: req.headers["user-agent"] || "Unknown",
                user_id: user.user_id
            })

           const token = await createToken({
               session_id: session.dataValues.session_id,
           })
        
           
           res.status(200).json({
               ok: true,
               message: "Token created",
               data: {
                   token
               }
           })
 
        } catch (error) { 
            next(error)
        }
    } 

    static async CreateUserController(req, res, next) {
       try {
            const data = await SignUpValidation(req.body, res.error);
 
            const user = await req.db.users.create({
                user_name: data.name,
                user_username: data.username,
                user_password: generateHash(data.password),
                user_gender: data.gender
            })

            res.status(201).json({
                ok: true,
                message: "User created succesfully"
            });
       } catch (error) {
           if(error.message == "Validation error"){
               error.errorCode = 400,
               error.message = "Username already exists"
               next(error)
           }
           next(error)
       };
    }
}