'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'contacts',
      'photo_content', 
    { 
      type: Sequelize.BLOB,
      allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('contacts', 'photo_content');
  }
};
