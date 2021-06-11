'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Absences', [
     {
       student_uuid: '16a4954c-345a-40a4-a762-d89af0f921df',
       entrance: 'SMA04548745896',
       date: '2021-04-06 06:28:55',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      student_uuid: '16a4954c-345a-40a4-a762-d89af0f921df',
      entrance: 'SMA04548745896',
      date: '2021-04-06 06:28:55',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      student_uuid: '16a4954c-345a-40a4-a762-d89af0f921df',
      entrance: 'SMA04548745896',
      date: '2021-04-06 06:28:55',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      student_uuid: '16a4954c-345a-40a4-a762-d89af0f921df',
      entrance: 'SMA04548745896',
      date: '2021-04-06 06:28:55',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      student_uuid: '16a4954c-345a-40a4-a762-d89af0f921df',
      entrance: 'SMA04548745896',
      date: '2021-04-06 06:28:55',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Adsences', null, {});
  }
};
