const { Sequelize } = require("sequelize");
const SessionsModel = require("../../models/SessionsModel");
const UserModel = require("../../models/UserModel");
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

        await relations(db);
        await init(db);

        await sequelize.sync()

        return db;
    } catch (error) {
        console.log("POSTGRES ERROR", error);
    }
}