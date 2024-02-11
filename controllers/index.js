const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const usersRoutes = require('./usersRoutes');
const profileRoutes = require('./profileRoutes');
const productsRoutes = require ('./productsRoutes');
const contactRoutes = require('./contactRoutes');
const musicVideosRoutes = require('./musicVideosRoutes');
// const withAuth = require('../utils/auth');

//https://localhost:3001/
router.use('/', homeRoutes);

router.use('/api', apiRoutes); 

router.use('/users', usersRoutes);

router.use('/profile', profileRoutes);

router.use('/products', productsRoutes);

router.use('/contact', contactRoutes);

router.use('/musicvideos', musicVideosRoutes);

module.exports = router;
