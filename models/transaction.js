'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Item}) {
      // define association here
      this.belongsTo(User, {foreignKey: 'userId', as:'transactions'})
      this.belongsToMany(Item, {foreignKey:'transaction_id', as:'items', through: 'transaction_item'})
    }
  }
  Transaction.init({
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    kode_bayar: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destination: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'transactions',
    modelName: 'Transaction',
  });
  return Transaction;
};