const { Model, DataTypes } = require('sequelize')

class Contact extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            date_nasc: DataTypes.DATEONLY,
            photo_content: DataTypes.BLOB,
            photo_name: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Contact