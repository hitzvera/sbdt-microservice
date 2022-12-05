'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON(){
      return {...this.get(), transaction_item: undefined}
    }
  }
  transaction_item.init({
    item_id: DataTypes.STRING,
    transaction_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaction_item',
  });
  return transaction_item;
};