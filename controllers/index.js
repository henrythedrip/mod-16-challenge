const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
//https://localhost:3001/
router.use('/', homeRoutes);

module.exports = router;
