'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Myjobs', {
      id: {
        type: Sequelize.UUID,         
        defaultValue: Sequelize.UUIDV4, 
        allowNull: false,
        primaryKey: true
      },
      job: {
        type: Sequelize.JSON
      },
      city: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Myjobs');
  }
};