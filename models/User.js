const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }

  // readOrders() {
  //   console.log(this.orders, typeof this.orders);
  //   const jdata = JSON.parse(this.orders);
  //   console.log(jdata, typeof jdata);
  //   return JSON.parse(String(this.orders)).orders;
  // }

  // writeOrder(productID) {
  //   let currentOrders = this.readOrders();
  //   currentOrders.push(String(productID));
  //   // no clue if this works
  //   this.orders = JSON.stringify(currentOrders);
  // }
}

// User.

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      
      primaryKey: true,
      autoIncrement: true,
    },

    // we are using the mysql JSON datatype here because we dont want to figure out how to join tables to handle orders for accounts lmao
    orders: {
      // we are using a string because we dont want to learn how to use the JSON datatype, but we will just JSON.straingify and JSON.parse it in our code before working with it :^)
      type: DataTypes.STRING,
      defaultValue: JSON.stringify([])
    },

    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

// Add associations method
// User.associate = (models) => {
//   User.hasOne(models.Account, {
//     foreignKey: 'shopperID',
//     as: 'account'
//   });

//   User.hasMany(models.Order, {
//     foreignKey: 'shopperID',
//     as: 'orders'
//   });
// };

module.exports = User;
