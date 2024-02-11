const router = require('express').Router();
const withAuth = require('../utils/auth');
const User = require('../models/User')

router.get('/', withAuth, async (req, res) => {
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


module.exports = router;