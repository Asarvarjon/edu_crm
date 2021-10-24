const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.POSTGRES_URL);


module.exports = async function(){
    try {
        await sequelize.authenticate();
        console.log("Connection has been established succesfully");
    } catch (error) {
        console.log("POSTGRES ERROR", error);
    }
}