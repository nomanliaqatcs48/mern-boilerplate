const Sequelize = require('sequelize');
const dotenv = require('dotenv').config();

let db = new Sequelize(process.env.DB_NAME, process.env.DB_DIALECT, process.env.DB_PASSWORD , {
    host: 'localhost',
    dialect: process.env.DB_DIALECT || 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

})

db.authenticate().then(() => {
    console.log('Connected to ' + process.env.DB_DIALECT + ` (${process.env.DB_NAME}) ` + 'Successfully!')
})
.catch((err) => {
    console.log('Connection Failed... ' + err)
})

module.exports = db;