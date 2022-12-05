'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Item, User}) {
      // define association here
      this.belongsTo(Item, {foreignKey: 'itemId', as: 'item'})
      this.belongsTo(User, {foreignKey: 'userId', as: 'user'})
    }
  }
  Reviews.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: DataTypes.STRING,
    likes_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    dislike_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    start: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
    }
  }, {
    sequelize,
    tableName: 'reviews',
    modelName: 'Review',
  });
  return Reviews;
};