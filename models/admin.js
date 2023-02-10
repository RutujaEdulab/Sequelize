module.exports=(sequelize,DataTypes)=>{

    const admin = sequelize.define(
      "Admin",
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
    return admin;
    
    }