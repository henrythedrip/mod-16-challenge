const router = require('express').Router();
const User = require('../models/User');

// .get users ✅ 
// gets all users, return all of the users as a JSON object
router.get('/', async (req, res) => {
    const userData = await User.findAll();
    // console.log(userData);
    res.json(userData);
});

// .post register ✅ 
// creates users with name, email, password.
router.post('/', (req, res) => {
    const { name, email, password } = req.body;
    User.create({
        name: name,
        email: email,
        password: password
    }).then(
        newUser => { res.status(201).json(newUser) }
    ).catch((err) => {
        console.log(err);
        res.status(400).json(err);
    })
});

// .get user/:id ✅
// this gets users by Primary Key (which is ID).. the request parameter is the ID because that was designated in the model
// this should probably be an authenticated route, because people are able to see other users info by typing /user/id
router.get('/:id', async (req, res) => {
    const userByID = await User.findByPk(req.params.id);
    res.json(userByID);
});

// .delete /user/:id ✅ 
// this deletes users by ID 
// TODO: Only allow delete functionality after verifying that users are logged in, they should have a token in their storage that says their logged in, or they should have to use their password for the account that they're trying to delete.
router.delete('/:id', (req, res) => {
    User.destroy({
        where: { id: req.params.id }
    })
        .then(num => {
            if (num == 1) {
                res.send({ message: "user deleted sucessfully!" });
            } else {
                res.send({ message: `cannot delete user with id=${req.params.id}. maybe user was not found` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `error deleting id=${req.params.id}`
            });
        });
});


module.exports = router;