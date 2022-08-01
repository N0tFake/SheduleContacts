const express = require('express')
const multer = require('multer')

const ContactController = require('./controller/ContactController')

const routes = express.Router()

const upload = multer({desc: '../server/temp/photo'})

routes.get('/contacts', ContactController.index)
routes.post('/add/contact', upload.single('file'), ContactController.store)
routes.delete('/contact/:contact_id', ContactController.delete)
routes.put('/contact/:contact_id', ContactController.update)

module.exports = routes