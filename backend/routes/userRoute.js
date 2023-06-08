const router = require('express').Router();

const UserModel = require('../models/userModel');

router.route('/register-route').post((req, res) => {
    const { lastname, firstname, email, password } = req.body;

    const newUser = new UserModel({
        firstname,
        lastname,
        email,
        password
    });

    newUser.save()
        .then(() => res.json("Registered Successfully!"))
        .catch(err => res.status(400).json("Error: " +err));
});


module.exports = router;