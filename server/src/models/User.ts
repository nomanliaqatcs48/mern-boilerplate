const Sequelize = require('sequelize')
const DB = require('../config/database')

const User = DB.define('User', {
    name: {
        type:Sequelize.STRING,
    },
    email: {
        type:Sequelize.STRING
    },
    password: {
        type:Sequelize.STRING
    },
    lastname: {
        type:Sequelize.STRING
    },
    role : {
        type:Sequelize.NUMBER
    },
    image: {
        type:Sequelize.STRING
    },
    token : {
        type:Sequelize.STRING
    },
    tokenExp :{
        type:Sequelize.NUMBER
    }
    
});

module.exports = { User }