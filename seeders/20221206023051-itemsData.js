'use strict';
const {faker} = require('@faker-js/faker');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items', [
      {
        image_url: 'image-1-3.png',
        name: 'Deskmat Vestia Zeta',
        price: 150000,
        condition: 'Baru',
      },
      {
        image_url: 'image-2.png',
        name: 'Phone Case Zeta',
        price: 99000,
        condition: 'Baru',
      },
      {
        image_url: 'image-3.png',
        name: 'Stand Acrylic Vestia Zeta',
        price: 69000,
        condition: 'Baru',
      },
      {
        image_url: 'image-4.png',
        name: 'Keychain Acrylic Vestia Zeta',
        price: 20000,
        condition: 'Baru',
      },
      {
        image_url: 'image-1-2.png',
        name: 'Garskin Kartu ATM Vestia Zeta',
        price: 20000,
        condition: 'Baru',
      },
      {
        image_url: 'image-1-1.png',
        name: 'T-Shirt Vestia Zeta',
        price: 99000,
        condition: 'Baru',
      },
      {
        image_url: 'image-5.png',
        name: 'Stiker Pack Vestia Zeta',
        price: 25000,
        condition: 'Baru',
      },
      {
        image_url: 'image-1.png',
        name: 'Dakimakura Vestia Zeta',
        price: 669000,
        condition: 'Baru',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('items', null, {})
  }
};
