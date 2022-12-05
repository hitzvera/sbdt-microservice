'use strict';
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Transaction, Review}) {
      // define association here
      this.hasMany(Transaction, {foreignKey: 'userId', as:'transactoins'})
      this.hasMany(Review, {foreignKey: 'userId', as: 'reviews'})
    }
  }
  User.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
      validate: {
        notEmpty: { msg: "name can't be empty"}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, 
      unique: true,
      trim: true,
      validate: {
        notEmpty: { msg: "email can not be empty"},
        isEmail: { msg: "Email format should be correct"}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
      validate: {
        notEmpty: { msg: "Password can't be empty"},
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true, 
    }
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};