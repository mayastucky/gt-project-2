module.exports = function (sequelize, DataTypes) {
  var Speciality = sequelize.define("Speciality", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Speciality.associate = function (models) {

    Speciality.belongsTo(models.Subject, {
    
    });
  };

  Speciality.associate = function (models) {
   
    Speciality.hasMany(models.Educator);
  };

  return Speciality;
};
