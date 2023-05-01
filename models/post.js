// Import necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the Post model by extending Sequelize's Model class
class Post extends Model {}

// Initialize the Post model by defining its attributes
Post.init(
  {
    // Define the "id" attribute
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Define the "title" attribute
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Define the "content" attribute
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // Define the "user_id" attribute and set up a foreign key to the User model
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
    timestamps: true, // Add "created_at" and "updated_at" timestamps
    freezeTableName: true, // Use the same table name as the model name
    underscored: true, // Use snake_case for column names
    modelName: 'post' // Set the model name to "post"
  }
);

// Export the Post model for use in other parts of the application
module.exports = Post;
