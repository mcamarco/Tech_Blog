const router = require('express').Router();

// Define the home route handler function
router.get('/', (req, res) => {
  res.send('Welcome to the Tech Blog!');
});

// Export the router so it can be used in other parts of the application
module.exports = router;
