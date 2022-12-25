'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Review, Transaction}) {
      // define association here
      this.belongsToMany(Transaction, {through: 'transaction_item', as: 'transactions', foreignKey: "item_id" })
      this.hasMany(Review, {foreignKey: 'itemId', as: 'reviews'})
    }
    toJSON(){
      return {...this.get(), transaction_item: undefined}
    }
  }
  Item.init({
    image_url: {
      type: DataTypes.STRING,
      defaultValue: 'https://picsum.photos/500'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
      validate: {
        notEmpty: {msg:"name can't be empty"}
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        notEmpty: {msg:"description can't be empty"}
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'price can\'t be empty'}
      }
    }
  }, {
    sequelize,
    tableName: 'items',
    modelName: 'Item',
  });
  return Item;
};