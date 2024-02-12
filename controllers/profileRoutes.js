const router = require('express').Router();
const withAuth = require('../utils/auth');
const User = require('../models/User');
const Products = require('../models/Products');

router.get('/', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        // we dont have this model so we aren't going to provide it.
        // include: [{ model: Project }],
      });
  
      const user = userData.get({ plain: true });
      const orders = JSON.parse(user.orders);

      console.log(orders);
      console.log(typeof orders);

      // TODO: this might not work, but its generally what we want to do
      // we cant do a for each because we make it a string in the User models.. but it looks like an array when we console log it.
      // for each cannot return anything, its not part of its functionality
      const purchasedProducts = []; 
      
      for(var i = 0; i < orders.length; i++){
        // console.log(orders[i])
        let info = await Products.findByPk(orders[i],{
          attributes: ['productID', 'price', 'productName']
        })
        let purchasedData = info.get({plain: true})
        // console.log(purchasedData)
        purchasedProducts.push(purchasedData)
        // console.log(purchasedProducts)
      }


      console.log("This is the final ARRAY =====> ",purchasedProducts)
      // await orders.forEach(async pk => {
      //   const data = await Products.findByPk(pk, {
      //     attributes: ['productID', 'price', 'productName']
      //   })
      //     const realData = data.get({ plain: true });
      //     // console.log(realData);
      //     purchasedProducts.push(realData);
      // })
      //   console.log("purchasedProducts", purchasedProducts);


      // here is where we need to create an array of products, each fetched from the Products table. the products primary keys are stored in a JSON array in User.orders
  
      res.render('profile', {
        ...user,
        logged_in: true,
        purchasedProducts,
        // here is where we should pass the previous orders information as "prevOrders"
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


module.exports = router;