'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsTo(models.role, {
        as: "role",
        foreignKey: "role_id"
      })

      user.belongsToMany(models.product, {
        as: "products",
        through: "shopping_cart",
        foreignKey: "user_id",
        otherKey: "product_id"
      })

      user.hasOne(models.domicilio, {
        as: "domicilio",
        foreignKey: "user_id"
      })
    }
  }
  user.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profilePic: DataTypes.STRING,
    token: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};