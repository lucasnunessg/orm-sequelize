'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Userss',
    [
      {
        fullName: 'Leonardo',
        email: 'leo@test.com',
        phoneNum: '997998877',
        // Usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'), // Corrigido para 'updatedAt'
      },
      {
        fullName: 'JEduardo',
        email: 'edu@test.com',
        phoneNum: '889885544',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'), // Corrigido para 'updatedAt'
      },
      {
        fullName: 'Lucas Nunes',
        email: 'lucasnunespacheco30@gmail.com',
        phoneNum: '5585985',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'), // Corrigido para 'updatedAt'
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Userss', null, {}),
};
