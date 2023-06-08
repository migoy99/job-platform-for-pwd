const router = require('express').Router();
const pwtability_users = require('../models/userModel');


router.route('/login-route').post(async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await pwtability_users.findOne({ email, password })

        if (user) {
            // Store the user's information in the session
            req.session.user = user;

            // Redirect to the home page on successful login
            res.redirect('/home');
        } else {
            // Invalid credentials
            res.status(401).json({ message: 'Invalid credentials1' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
})

module.exports = router;    