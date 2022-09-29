'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shopping_cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      shopping_cart.belongsTo(models.product, {
        as: "product",
        foreignKey: "product_id"
      })

      shopping_cart.belongsTo(models.user, {
        as: "user",
        foreignKey: "user_id"
      })
    }
  }
  shopping_cart.init({
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'shopping_cart',
  });
  return shopping_cart;
};