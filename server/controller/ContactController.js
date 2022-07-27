const Contact = require('../models/Contact')
const fs = require('fs')
const database = require('../config/database')

module.exports = {
    async index(req, res) {
        const contacts = await Contact.findAll({
            order: [['name']]
        })

        contacts.forEach(item => {
            base64_decode(item.photo_content, item.photo_name)
        })

        return res.json(contacts)
    },

    async store(req, res) {
        const { name, email, phone, date_nasc, photo_name} = req.body

        const photo_content = base64_encode(photo_name)

        const contact = await Contact.create({ 
            name: name, 
            email: email, 
            phone: phone, 
            date_nasc: date_nasc, 
            photo_content: photo_content, 
            photo_name: photo_name 
        })

        return res.json(contact)
    },
}

function base64_decode(base64str, fileName){
    const bitmap = Buffer(base64str.toString(), 'base64')
    fs.writeFileSync('server/temp/result/' + fileName + '', bitmap, 'binary')
}

function base64_encode(file) {
    const bitmap = fs.readFileSync('server/temp/photo/' + file + '')
    return Buffer(bitmap).toString('base64')
}