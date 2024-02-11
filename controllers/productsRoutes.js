const router = require('express').Router();
const Products = require('../models/Products');

//https://localhost:3001/products
router.get("/", async (req, res)=>{
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

module.exports = router;