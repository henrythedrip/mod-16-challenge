const User = require('./User');
const Account = require('./Account');
const Order = require('./Order');
const OrderDetail = require('./OrderDetail');
const Products = require('./Products');

// Set up model associations
User.associate({ Account, Order });
Account.associate({ User });
Order.associate({ User, OrderDetail });
OrderDetail.associate({ Order, Products });
Products.associate({ OrderDetail });

module.exports = { User, Account, Order, OrderDetail, Products };

//A User can have one Account (One-to-One relationship).
//A User can have many Orders (One-to-Many relationship).
//An Order can have many OrderDetails (One-to-Many relationship).
//A Product can have many OrderDetails (One-to-Many relationship).
