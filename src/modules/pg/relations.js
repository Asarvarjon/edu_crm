module.exports = async (db) => {
    await db.users.hasMany(db.sessions, {
        foreignKey: {
            name: "user_id",
            allowNull: false
        }
    })

    await db.sessions.belongsTo(db.users, {
        foreignKey: {
            name: "user_id",
            allowNull: false
        }
    });

    await db.users.hasMany(db.user_permissions, {
        foreignKey: {
            name: "user_id",
            allowNull: false
        }
    })

    await db.user_permissions.belongsTo(db.users, {
        foreignKey: {
            name: "user_id",
            allowNull: false
        }
    });

    await db.permissions.hasMany(db.user_permissions, {
        foreignKey: {
            name: "permission_id",
            allowNull: false
        }
    })

    await db.user_permissions.belongsTo(db.permissions, {
        foreignKey: {
            name: "permission_id",
            allowNull: false
        }
    });


    await db.users.hasOne(db.teachers, {
        foreignKey: {
            name: "user_id",
            allowNull: false
        }
    })

    await db.teachers.belongsTo(db.users, {
        foreignKey: {
            name: "user_id",
            allowNull: false
        }
    });

// Applicantlarni kim ro'yhatga olgani
    await db.users.hasMany(db.applicants, {
        foreignKey: {
            name: "user_id",
            allowNull: false
        }
    })

    await db.applicants.belongsTo(db.users, {
        foreignKey: {
            name: "user_id",
            allowNull: false
        }
    })

    await db.courses.hasMany(db.applicants, {
        foreignKey: {
            name: "course_id",
            allowNull: false
        }
    })

    await db.applicants.belongsTo(db.courses, {
        foreignKey: {
            name: "course_id",
            allowNull: false
        }
    })
}