const errorHandler = require("../helpers/errorHandler")

module.exports = async function(app){ 
    try {
        app.use("/users", require("./users/UserRoute"));
        app.use("/teachers", require("./teachers/TeacherRoute"))
        app.use("/courses",  require("./courses/CourseRoute"))
        app.use("/applicants",  require("./applicants/ApplicantRoute"))
        app.use("/groups", require("./groups/GroupRoute"))

    }finally{
        app.use(errorHandler)
    }
}