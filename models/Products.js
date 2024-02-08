const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Products extends Model {
  
}


Products.init(
  {
    productID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING,
    },
    productDescription: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    img:  {
      type: DataTypes.STRING,
    },
    altText:  {
      type: DataTypes.STRING,
    
  },
  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'products',
  });
// Add associations method
Products.associate = (models) => {
  Products.hasMany(models.OrderDetail, {
    foreignKey: 'productId',
    as: 'orderDetails'
  });
};
module.exports = Products;
