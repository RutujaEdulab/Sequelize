// Importing Sequelize and Export this file in app.js
const { Sequelize, DataTypes } = require("sequelize");

// Connect to database using sequelize
const sequelize = new Sequelize("school", "root", "root", {
  host: "localhost",
  logging:false,
  dialect: "mysql",
});
// Checking for connection established or not
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
// Creating Table using db.squlelize.sync() function;
const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.students=require('./students')(sequelize,DataTypes);
db.faculty=require('./faculty')(sequelize,DataTypes);
db.admin=require('./admin')(sequelize,DataTypes);
db.sequelize.sync({ force: false });
console.log("Tables are created successfully.");

module.exports=db