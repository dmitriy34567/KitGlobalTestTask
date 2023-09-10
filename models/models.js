const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})
 
const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: DataTypes.INTEGER}
})


const UserProfile = sequelize.define('userProfile', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userid: {type: DataTypes.INTEGER, allowNull: false, unique: true  },
    name : {type: DataTypes.STRING, allowNull: false },
    description : {type: DataTypes.STRING}
})


const Project = sequelize.define('project', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    authorid: {type: DataTypes.INTEGER, allowNull: false, unique: true  },
    name : {type: DataTypes.STRING, allowNull: false },
    description : {type: DataTypes.STRING},
})

const Task = sequelize.define('task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    authorid: {type: DataTypes.INTEGER, allowNull: false, unique: true  },
    projectid: {type: DataTypes.INTEGER, allowNull: false, unique: true  },
    name : {type: DataTypes.STRING, allowNull: false },
    description : {type: DataTypes.STRING},
    status : {type: DataTypes.STRING},
})




UserProfile.hasOne(User)
User.belongsTo(UserProfile)

UserProfile.hasMany(Project)
Project.belongsTo(UserProfile)

Project.hasMany(Task)
Task.belongsTo(Project)

UserProfile.hasOne(Basket)
Basket.belongsTo(UserProfile)

module.exports = {
    User,
    UserProfile,
    Event,
    Basket,
    Project,
    Task
   
}





