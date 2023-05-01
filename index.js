const Sequelize = require('sequelize');
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('user', {
  // User model attributes go here
});

const Post = sequelize.define('post', {
  // Post model attributes go here
});

const Comment = sequelize.define('comment', {
  // Comment model attributes go here
});

// Create associations between models
User.hasMany(Post, {
  foreignKey: 'userId'
});

Post.belongsTo(User, {
  foreignKey: 'userId'
});

User.hasMany(Comment, {
  foreignKey: 'userId'
});

Comment.belongsTo(User, {
  foreignKey: 'userId'
});

Post.hasMany(Comment, {
  foreignKey: 'postId'
});

Comment.belongsTo(Post, {
  foreignKey: 'postId'
});

// Export the database connection object and the models
module.exports = {
  sequelize,
  User,
  Post,
  Comment
};
