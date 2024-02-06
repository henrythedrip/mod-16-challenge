const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CheckOutStatus extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

CheckOutStatus.init(
  {
    OrderID: {
      type: DataTypes.INTEGER,
      
      primaryKey: true,
      autoIncrement: true,
    },
   
    paid: {
      type: DataTypes.BOOLEAN,
      },
      
      ThankYouNote: {
        type: DataTypes.STRING,
      },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName:'CheckOutStatus',
    });

module.exports = CheckOutStatus;
