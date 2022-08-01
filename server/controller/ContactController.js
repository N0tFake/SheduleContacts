const Contact = require('../models/Contact')
const fs = require('fs')

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

        const { name, email, phone, date_nasc, photo_name, photo_content} = req.body

        /* saveImg(img, photo_name)
        
        const photo = base64_encode(photo_name) */

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

    async delete(req, res){
        const { contact_id } = req.params
        const contact = await Contact.findByPk(contact_id)

        if(contact) await contact.destroy()

        return res.json(contact)
    },

    async update(req, res){
        const { contact_id } = req.params
        const contact = await Contact.findByPk(contact_id)

        const { name, email, phone, date_nasc, photo_name, photo_content} = req.body

        if(contact){
            if(name) contact.name = name 
            if(email) contact.email = email
            if(phone) contact.phone = phone
            if(date_nasc) contact.date_nasc = date_nasc

            await contact.save()
        }

        return res.json(contact)
    },
}

function base64_decode(base64str, fileName){
    const bitmap = Buffer(base64str.toString(), 'base64')
    fs.writeFileSync('client/schedule/temp/profiles/' + fileName + '', bitmap, 'binary')
}

function saveImg(file, fileName){
    fs.writeFileSync('server/temp/photo/' + fileName + '', file)
}

function base64_encode(file) {
    //const bitmap = fs.readFileSync('server/temp/photo/' + file + '')
    return Buffer(file).toString('base64')
}