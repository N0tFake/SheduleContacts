const { Model, DataTypes } = require('sequelize')

class Contact extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            date_nasc: DataTypes.DATEONLY
        }, {
            sequelize
        })
    }
}

module.exports = Contact