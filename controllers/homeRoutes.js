const router = require('express').Router();

// route to render the homepage handlebar view.
router.get('/', async (req, res) => {
  console.log(req.session);
  // const logged_in = req.session.logged_in;
  res.render('homepage', { logged_in: req.session.logged_in });
});

// renders login page (still here because im lazy)
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
