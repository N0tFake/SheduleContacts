const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Contact = require('../models/Contact')

const conn = new Sequelize(dbConfig)

Contact.init(conn)

module.exports = conn 