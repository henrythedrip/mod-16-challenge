const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {
 
}

Order.init(
  {
    orderID: {
      type: DataTypes.INTEGER,
      
      primaryKey: true,
      autoIncrement: true,
    },
    shopperID: {
      type: DataTypes.INTEGER,
    },
    
      productID: {
        type: DataTypes.INTEGER,
      }

      
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Order',
  }
);

// Add associations method
Order.associate = (models) => {
  Order.belongsTo(models.User, {
    foreignKey: 'shopperID',
    as: 'user'
  });

  Order.hasMany(models.OrderDetail, {
    foreignKey: 'orderId',
    as: 'orderDetails'
  });
};

module.exports = Order;
