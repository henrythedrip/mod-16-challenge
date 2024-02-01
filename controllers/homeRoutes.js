const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
 const userData = await User.findAll({
    attribut: { exclude: ['password']}
  });
  const users = userData.map(user => user.get({plain: true}));
  res.render('homepage', { users });
});

module.exports = router;
