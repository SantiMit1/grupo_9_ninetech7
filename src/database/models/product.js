'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsTo(models.category, {
        as:"category",
        foreignKey: "category_id"
      })

      product.belongsTo(models.brand, {
        as:"brand",
        foreignKey: "brand_id"
      })

      product.belongsTo(models.type, {
        as:"type",
        foreignKey: "type_id"
      })

      product.belongsToMany(models.user, {
        as: "users",
        through: "shopping_cart",
        foreignKey: "product_id",
        otherKey: "user_id"
      })
    }
  }
  product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    enOferta: DataTypes.INTEGER,
    discount: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};