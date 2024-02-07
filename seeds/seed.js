const sequelize = require('../config/connection');

const { User } = require('../models');
const userData = require('./userData.json');

const { Products } = require('../models');
const productData = require('./productData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Products.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  })

  process.exit(0);
};

seedDatabase();
