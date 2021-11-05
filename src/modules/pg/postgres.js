const { Sequelize } = require("sequelize");
const ApplicantModel = require("../../models/ApplicantModel");
const CourseModel = require("../../models/CourseModel");
const GroupModel = require("../../models/GroupModel");
const GroupStudentsModel = require("../../models/GroupStudentsModel");
const PermissionModel = require("../../models/PermissionModel");
const SessionsModel = require("../../models/SessionsModel");
const TeacherModel = require("../../models/TeacherModel");
const UserModel = require("../../models/UserModel");
const UserPermissionModel = require("../../models/UserPermissionModel");
const init = require("./init");
const relations = require("./relations");

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
    logging: false
});


module.exports = async function(){
    try {
        await sequelize.authenticate();
        console.log("Connection has been established succesfully");


        let db = {}; 
        db.users = await UserModel(sequelize, Sequelize);
        db.sessions = await SessionsModel(sequelize, Sequelize);
        db.permissions = await PermissionModel(sequelize, Sequelize);
        db.user_permissions = await UserPermissionModel(sequelize, Sequelize);
        db.teachers = await TeacherModel(sequelize, Sequelize);
        db.courses = await CourseModel(sequelize, Sequelize);
        db.applicants = await ApplicantModel(sequelize, Sequelize);
        db.groups = await GroupModel(sequelize, Sequelize);
        db.group_students = await GroupStudentsModel(sequelize, Sequelize)

        //  await db.group_students.sync({force: true})
         
        await relations(db);
        await init(db);

        await sequelize.sync({force: false})


        return db;
    } catch (error) {
        console.log("POSTGRES ERROR", error);
    }
}