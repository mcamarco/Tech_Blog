const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the Post model by extending Sequelize's Model class
class Post extends Model {}

// Initialize the Post model by defining its attributes
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    // Specify the database connection and model options
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

// Export the Post model for use in other parts of the application
module.exports = Post;
