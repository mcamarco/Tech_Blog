// Import necessary modules and database connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the User model by extending Sequelize's Model class
class User extends Model {}

// Initialize the User model by defining its attributes
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true // Validates that the email attribute is a valid email address
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4] // Validates that the password attribute has a minimum length of 4 characters
      }
    }
  },
  {
    // Specify the database connection and model options
    sequelize,
    timestamps: false, // Disables Sequelize's timestamps feature
    freezeTableName: true, // Disables the pluralization of the table name
    underscored: true, // Sets the naming convention for the columns to snake_case
    modelName: 'user' // Sets the name of the model to User
  }
);

// Export the User model for use in other parts of the application
module.exports = User;
