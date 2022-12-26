"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("items", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      image_url: {
        type: DataTypes.STRING,
        defaultValue: "https://picsum.photos/500",
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      condition: {
        type: DataTypes.STRING,
      },
      specification: {
        type: DataTypes.STRING,
      },
      dimension: {
        type: DataTypes.STRING,
      },
      weight: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("items");
  },
};
