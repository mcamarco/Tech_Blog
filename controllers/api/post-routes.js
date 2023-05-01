const router = require('express').Router();
const postRoutes = require('./post-routes');
const withAuth = require('../../utils/auth');

// Route for getting all posts and including the user data
// the route.get method is used to retrieve data from the server, withAuth means that the user must be logged in to view the data. async/await is used to handle asynchronous functions 
router.get('/', withAuth, async (req, res) => {
    try {
        // Get all post data, including the user who made the post
        const postData = await Post.findAll({
            include: [User],
        });
        // Serialize the post data to an array of plain objects
        const posts = postData.map((post) => post.get({ plain: true }));

        // Render the homepage handlebars template with the posts and logged in status
        res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    });

    // Route for getting a single post by id and including the user data
    router.get('/post/:id', withAuth, async (req, res) => {
        try {
            // Get all post data, including the user who made the post
            const postData = await Post.findByPk(req.params.id, {
                include: [User],
            });
            // Serialize the post data to an array of plain objects
            const post = postData.get({ plain: true });

            // Render the single-post handlebars template with the post and logged in status
            res.render('single-post', { post, loggedIn: req.session.loggedIn });
        } catch (err) {
            res.status(500).json(err);
        }
    });

    // Route for rendering the login page
    router.get('/login', (req, res) => {
        // If the user is already logged in, redirect the request to another route
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }

        // Otherwise, render the 'login' template
        res.render('login');
    });

    // Route for rendering the signup page
    router.get('/signup', (req, res) => {
        // If the user is already logged in, redirect the request to another route
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }

        // Otherwise, render the 'signup' template
        res.render('signup');
    });

    module.exports = router;