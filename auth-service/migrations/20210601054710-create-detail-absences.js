'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DetailAbsences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      absent_id: {
        type: Sequelize.BIGINT
      },
      student_name: {
        type: Sequelize.STRING
      },
      time_in: {
        type: Sequelize.DATE
      },
      time_out: {
        type: Sequelize.DATE
      },
      information: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DetailAbsences');
  }
};