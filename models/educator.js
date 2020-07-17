module.exports = function(sequelize, DataTypes) {
    var Educator = sequelize.define("Educator", {
      // The email cannot be null, and must be a proper email before creation
      first_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      last_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      // The password cannot be null
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
      bio: {
          type: DataTypes.TEXT,
          allowNull: false,
      }
      
    });
        // Educator.associate = function(models) {
        //   Educator.hasOne(models.Speciality, {
            
        //   });
        // };
      
   
    return Educator;
  };