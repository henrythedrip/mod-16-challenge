const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Order = require('./Order'); // Make sure this path is correct
const Product = require('./Product'); // Make sure this path is correct

class OrderDetail extends Model {}

OrderDetail.init({
  // Define attributes for the OrderDetail model
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'order', // This is the table name for Order, it could be different based on your setup
      key: 'orderID',
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'products', // This is the table name for Product, it could be different based on your setup
      key: 'productID',
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  // You can add more fields here if needed
}, {
  sequelize,
  modelName: 'orderDetail',
  timestamps: false,
  freezeTableName: true,
  underscored: true,
});

// Associations
OrderDetail.belongsTo(Order, {
  foreignKey: 'orderId',
  as: 'order',
});

OrderDetail.belongsTo(Products, {
  foreignKey: 'productId',
  as: 'products',
});

// Export the model
module.exports = OrderDetail;

