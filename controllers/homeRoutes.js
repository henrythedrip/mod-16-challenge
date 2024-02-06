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
});

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

router.delete('/users/:id', (req, res) => {
  User.destroy({
    where: { id: req.params.id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message : "user deleted sucessfully!"});
      } else {
        res.send({ message: `cannot delete user with id=${req.params.id}. maybe user was not found`});
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `error deleting id=${req.params.id}`
      });
    });
});

// user routes
// .post login

// .post logout

// .post register

// .get user

// .get user/:id

// .delete /user/:id

// .put /user/:id

// product routes
// .get /api/products -> res.render('product', {productData})
// .get /api/products/:id

// view routes
// .get /homepage -> render 'homepage.handlebars'

// res.render('product', {productData})

// create other routes files like "productRoutes.js", "userRoutes.js" (login/logout)

module.exports = router;
