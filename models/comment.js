const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the Comment model by extending Sequelize's Model class
class Comment extends Model {}

// Initialize the Comment model by defining its attributes
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user', // This sets up a foreign key constraint with the user table
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post', // This sets up a foreign key constraint with the post table
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
    modelName: 'comment'
  }
);

// Export the Comment model for use in other parts of the application
module.exports = Comment;
