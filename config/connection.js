// TODO: Import the Sequelize package and dotenv package to load environment variables
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// TODO: Check if there is a JAWSDB_URL environment variable
if (process.env.JAWSDB_URL) {
  // If it exists, create a Sequelize instance using the JAWSDB_URL
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // If it doesn't exist, create a Sequelize instance using the values of DB_NAME, DB_USER, and DB_PASSWORD environment variables
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
    
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

// TODO: Export the sequelize instance so that it can be used in other parts of the application
module.exports = sequelize;
