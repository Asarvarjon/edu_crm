const { SignInValidation } = require("../modules/validations");
const { createToken } = require("../modules/jwt")

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


}