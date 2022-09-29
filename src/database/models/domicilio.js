'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class domicilio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      domicilio.belongsTo(models.user, {
        as: "user",
        foreignKey: "user_id"
      })
    }
  }
  domicilio.init({
    localidad: DataTypes.STRING,
    direccion: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'domicilio',
  });
  return domicilio;
};