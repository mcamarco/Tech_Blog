// This file handles the creation, editing, and deletion of posts.

// Import the necessary modules from the Express.js library
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');

// Mount the user, comment, and post routes modules at their respective endpoints
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);

// Export the router module for use in other parts of the application
module.exports = router;
