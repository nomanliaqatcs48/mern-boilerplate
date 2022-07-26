const Sequelize = require('sequelize')
const db = require('../config/database')

const User = db.define('userSchema', {
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