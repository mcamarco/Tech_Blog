// TODO: fix routes for blog post, change project routes  

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/comments', userRoutes);
// post = blogpost
router.use('/post', userRoutes);



module.exports = router;
