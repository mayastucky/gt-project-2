const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  const Educator = sequelize.define("Educator", {
    // The email cannot be null, and must be a proper email before creation
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  // Educator.associate = function(models) {
  //   Educator.hasOne(models.Speciality, {

  //   });
  // };
  Educator.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Educator.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return Educator;
};
