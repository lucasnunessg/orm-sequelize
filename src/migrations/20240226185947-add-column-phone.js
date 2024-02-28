'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.addColumn('Userss', 'phoneNum',{
    type: Sequelize.STRING,
  })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('Userss', 'phoneNum')
  }
};
