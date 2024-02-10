const router = require('express').Router();
const Products = require('../models/Products');
const User = require('../models/User');
const withAuth = require('../utils/auth');

// route to render the homepage handlebar view.
router.get('/', async (req, res) => {
  res.render('homepage');
});

// .get users ✅ 
// gets all users, return all of the users as a JSON object
router.get('/users', async (req, res) => {
  const userData = await User.findAll();
  // console.log(userData);
  res.json(userData);
});

// .post register ✅ 
// creates users with name, email, password.
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

// .get user/:id ✅
// this gets users by Primary Key (which is ID).. the request parameter is the ID because that was designated in the model
router.get('/users/:id', async (req, res) => {
  const userByID = await User.findByPk(req.params.id);
  // console.log(userByID);
  res.render('user',{ users })
  res.json(userByID);
});

// .delete /user/:id ✅ 
// this deletes users by ID 
// TODO: Only allow delete functionality after verifying that users are logged in, they should have a token in their storage that says their logged in, or they should have to use their password for the account that they're trying to delete.
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

router.post('/login', async (req, res) => {
  try {
    
    // TODO: we are differentiating btwn incorrect email response and incorrect password response here, when we should make those responses identical for security purposes.
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    console.log(userData.id);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// .post logout

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // we dont have this model so we aren't going to provide it.
      // include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    console.log(user);

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// .post login api/users/login

// router.post('/api/users/login', (req, res) => {
  
// })

// .put /user/:id (alter a user) XXX
// this would be neccessary if people wanted to change their name, email or password

// product routes
// .get /api/products -> res.render('product', {productData})
// finds all products and returns them as a JSON object
router.get('/api/products', async (req, res) => {
  const products = await Products.findAll();
  res.json(products);
}) 

// .get /api/products/:id
// gets products by their primary key, which is ID, as designated by productData.json
router.get('/api/products/:id', async (req, res) => {
  const productByID = await Products.findByPk(req.params.id);
  // console.log(userByID);
  res.json(productByID);
});
//https://localhost:3001/products
router.get("/products", async (req, res)=>{
  try{
    let getProducts =  await Products.findAll();
    // console.log("This is all the products", getProducts);
    let products = getProducts.map((product)=>product.get({plain: true}))
    // console.log("This is all the products", products);
    res.render('products',{ products})
  }catch (err){
    console.log(err);
    res.status(500).json(err)
  }
})

router.get("/contact", (req, res)=>{
  res.render('contact')
});

// route to disallow anyone from seeing pages without logging in
// router.get('/', withAuth, async (req, res) => {
// });

// view routes
// .get /homepage -> render 'homepage.handlebars'

// res.render('product', {productData})

// TODO: create other routes files like "productRoutes.js", "userRoutes.js" (login/logout)

// create routes that push people back to a specific page if they are not logged in (try mod 14 activity 23 utils/auth.js)

module.exports = router;
