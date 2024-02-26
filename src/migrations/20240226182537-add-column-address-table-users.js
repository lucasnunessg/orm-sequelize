'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.addColumn('Users', 'adress', {
    type: Sequelize.STRING,
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'address');
  }
};
