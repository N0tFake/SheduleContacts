const express = require('express')

const ContactController = require('./controller/ContactController')

const routes = express.Router()

routes.get('/contacts', ContactController.index)
routes.post('/contact', ContactController.store)

module.exports = routes