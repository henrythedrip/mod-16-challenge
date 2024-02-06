const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
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

module.exports = Order;
