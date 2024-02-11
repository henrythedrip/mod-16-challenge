const router = require('express').Router();
const Products = require('../../models/Products');
const logoutRoutes = require('./logoutRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);

// product routes
// .get /api/products -> res.render('product', {productData})
// finds all products and returns them as a JSON object
router.get('/products', async (req, res) => {
    const products = await Products.findAll();
    res.json(products);
});

// gets products by their primary key, which is ID, as designated by productData.json
router.get('/products/:id', async (req, res) => {
    const productByID = await Products.findByPk(req.params.id);
    // console.log(userByID);
    res.json(productByID);
});

module.exports = router;

