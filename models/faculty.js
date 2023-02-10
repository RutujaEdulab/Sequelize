module.exports=(sequelize,DataTypes)=>{

const faculty = sequelize.define(
  "Faculties",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue:"Patil"
      // allowNull defaults to true
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
return faculty;

}
