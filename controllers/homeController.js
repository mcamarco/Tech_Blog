const { Post, User, Comment } = require('../models');

const homeController = {
  // Method to render the home page
  async renderHomePage(req, res) {
    try {
      // Get all posts from the database, including the associated user data
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });

      // Serialize the post data and render the home page
      const posts = postData.map((post) => post.get({ plain: true }));
      res.render('home', { posts });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = homeController;
