module.exports = function (sequelize, DataTypes) {
    var Subject = sequelize.define("Subject", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Subject.associate = function (models) {
      Subject.hasMany(models.Speciality, {
        onDelete: "cascade",
      });
    };
  
  
    return Subject;
  };
  