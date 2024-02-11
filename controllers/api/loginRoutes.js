const router = require('express').Router();
const User = require('../../models/User');

router.post('/', async (req, res) => {
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

module.exports = router;