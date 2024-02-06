const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Account extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Account.init(
  {
    shopperID: {
      type: DataTypes.INTEGER,

      primaryKey: true,
      autoIncrement: true,
    },
  
    address: {
      type: DataTypes.STRING,
      unique: true,
    },
   
    city: {
      type: DataTypes.STRING,
      unique: true,
    },
    state: {
      type: DataTypes.STRING,
      unique: true,
    },
    zip: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
 
  {
   
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Account',
  }
);

module.exports = Account;
