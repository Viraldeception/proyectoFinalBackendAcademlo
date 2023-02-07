const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return product_in_cart.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schema:
 *     addProductToCart:
 *       type: object
 *       properties:
 *         quantity:
 *           type: integer
 *           example: 2
 *         price:
 *           type: string
 *           example: 2500
 *         cart_id:
 *           type: integer
 *           example: 1
 *         product_id:
 *           type: integer
 *           example: 2
 */

class product_in_cart extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          autoIncrementIdentity: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        price: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },

        cart_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "cart",
            key: "id",
          },
        },
        product_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "product",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "product_in_cart",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "product_in_cart_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
