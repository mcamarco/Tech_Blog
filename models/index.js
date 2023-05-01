const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
});

Comment.belongsTo(Post, {
  foreignKey: 'postId'
});
module.exports = {
  User,
  Comment,
  Post
};