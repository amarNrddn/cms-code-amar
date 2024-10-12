'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      thumbnail: {
        type: Sequelize.STRING
      },
      introduction: {
        type: Sequelize.TEXT
      },
      titleconten: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      solution: {
        type: Sequelize.TEXT
      },
      instalation: {
        type: Sequelize.TEXT
      },
      code_snippet: {
        type: Sequelize.TEXT
      },
      elucidation: {
        type: Sequelize.TEXT
      },
      tags: {
        type: Sequelize.JSON
      },
      slug: {
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
    await queryInterface.dropTable('Blogs');
  }
};