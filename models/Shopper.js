const { Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://user:pass@localhost:3001/mod-16-challenge');
const bcrypt = require('bcrypt');

class Shopper extends Model {}

Shopper.init({
  // Model attributes are defined here
  shopperID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
 
  email: {
    type: DataTypes.STRING
    // allowNull defaults to true
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
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Shopper',
  });


// the defined model is the class itself
console.log(Shopper === sequelize.models.Shopper)// true

module.exports = Shopper;