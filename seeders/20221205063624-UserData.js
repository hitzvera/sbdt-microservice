'use strict';
const {faker} = require('@faker-js/faker')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
  //   */
  //  let data = []
  //  let amount = 10
  //  while(amount--){
  //   data.push({
  //     uuid: faker.datatype.uuid(),
  //     name: faker.name.fullName(),
  //     email: faker.internet.email(),
  //     password: faker.internet.password(),
  //     role: "user",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   })
  //  }
  //  await queryInterface.bulkInsert('users', data, {})
   
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
};
