const express = require('express')
const multer = require('multer')

const ContactController = require('./controller/ContactController')

const routes = express.Router()

const upload = multer({desc: '../server/temp/photo'})

routes.get('/contacts', ContactController.index)
routes.post('/add/contact', upload.single('file'), ContactController.store)

module.exports = routes