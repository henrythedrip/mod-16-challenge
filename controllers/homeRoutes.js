const router = require('express').Router();
const Products = require('../models/Products');
const User = require('../models/User');
// const withAuth = require('../utils/auth');

// route to render the homepage handlebar view.
router.get('/', async (req, res) => {
  res.render('homepage');
});


// user routes
// .post login

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

// router.get('/signup', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('signup');
// });



router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});



// .post login api/users/login

// router.post('/api/users/login', (req, res) => {
  
// })

// .put /user/:id (alter a user) XXX
// this would be neccessary if people wanted to change their name, email or password

// route to disallow anyone from seeing pages without logging in
// router.get('/', withAuth, async (req, res) => {
// });

// view routes
// .get /homepage -> render 'homepage.handlebars'

// res.render('product', {productData})

// TODO: create other routes files like "productRoutes.js", "userRoutes.js" (login/logout)

// create routes that push people back to a specific page if they are not logged in (try mod 14 activity 23 utils/auth.js)

module.exports = router;
