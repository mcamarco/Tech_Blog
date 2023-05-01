//  Import the express package and the routes for the user, comment, and post models
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');

// Define the routes for the user, comment, and post models
router.use('/users', userRoutes); 
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes); 

//Export the router to be used in other parts of the application
module.exports = router;
