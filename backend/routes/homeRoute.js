const router = require('express').Router();

router.route('/').get((req, res) => {
    // Retrieve the user information from the session
    const currentUser = req.session.user;

    // Render the home page and pass the currentUser object
    res.render('home', { currentUser });
})

module.exports = router;