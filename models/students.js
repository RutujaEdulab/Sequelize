
module.exports=(sequelize,DataTypes)=>{
const students = sequelize.define(
  "Students",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue:"Patil",
      allowNull : true
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
 
  {
    
    // Other model options go here
  }

);
//here we return the function
return students;

}

