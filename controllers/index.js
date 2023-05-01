// Import the ___ from the Express.js library
const router = require('express').Router(); 
const userRoutes = require('./userRoutes'); 
const commentRoutes = require('./commentRoutes'); 
const postRoutes = require('./postRoutes'); 

// Mount the ? module at the '/?' endpoint
router.use('/users', userRoutes); 
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes); 

// Export the router module for use in other parts of the application
module.exports = router; 


// This code is creating a set of instructions that define how the app should handle different requests made to different parts of the website. There are different "route modules" that contain the code for what should happen when someone accesses a specific URL, like '/users' or '/comments'. 

// The code uses a special method called `router.use()` to connect each of these modules to a specific URL so that when a user visits that URL, the app knows which code to run. For example, the code connects the `userRoutes` module to the '/users' URL so that when a user visits that URL, the app runs the code in the `userRoutes` module. 

// After connecting all the route modules, the code exports the set of instructions as a module, so that other parts of the app can use it to handle requests made to the different URLs.