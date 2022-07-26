const Contact = require('../models/Contact')

module.exports = {
    async index(req, res) {
        const contacts = await Contact.findAll({
            order: [['name']]
        })

        return res.json(contacts)
    },

    async store(req, res) {
        const { name, email, phone, date_nasc } = req.body

        const contact = await Contact.create({ name, email, phone, date_nasc }) 

        return res.json(contact)
    },
}