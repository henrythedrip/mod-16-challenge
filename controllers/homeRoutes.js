const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  const userData = await User.findAll({
    attribut: { exclude: ['password'] }
  });
  const users = userData.map(user => user.get({ plain: true }));
  res.render('homepage', { users });
});

router.get('/users', async (req, res) => {
  const userData = await User.findAll();
  // console.log(userData);
  res.json(userData);
})

router.post('/users', (req, res) => {
  const { name, email, password } = req.body;
  User.create({
    name: name,
    email: email,
    password: password
  }).then(
    newUser => { res.status(201).json(newUser) }
  ).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
});


module.exports = router;
