const router = require('express').Router();
const User = require('../../models/User');
const Products = require('../../models/Products');

router.post('/:productID', async (req, res) => {
  if (req.session.logged_in) {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }
    })
    
    const product = await Products.findByPk(req.params.productID);

    // console.log(__filename, userData);
    // console.log(__filename, product);

    if (userData && product) {
      console.log("smoke test for having both userdata and product");

      const prevOrders = JSON.parse(userData.orders)
      const newOrders = JSON.stringify([...prevOrders, product.productID])

      userData.update({orders: newOrders})
      userData.save()
      res.json({msg: "added to orders"})
    } else {
      res.json({err: { msg: "failed to get either userdata or product" }})
    }
  } else {
    res.json({err : { msg: "user was not logged in" }})
  }
});

module.exports = router;