const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {
  
}

Product.init(
  {
    ProductID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ProductName: {
      type: DataTypes.STRING,
    },
    ProductDescription: {
      type: DataTypes.STRING,
    },
      price: {
        type: DataTypes.DataTypes.INTEGER,
      },

      img:  {
        type: DataTypes.STRING,
      },


    


    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product',

  });

module.exports = Product;
