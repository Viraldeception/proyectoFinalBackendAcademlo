const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return product.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schema:
 *     addProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: parlante
 *         price:
 *           type: double
 *           example: 1500
 *         availableQty:
 *           type: int
 *           example: 3
 *         image_url:
 *           type: string
 *           example: https://d3ugyf2ht6aenh.cloudfront.net/stores/001/955/262/products/flip-511-b34b410f73b756b8f216389028421439-1024-1024.jpg
 *         user_id:
 *           type: int
 *           example: 2
 */

class product extends Sequelize.Model {
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
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        price: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
        availableQty: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        image_url: {
          type: DataTypes.STRING,
          allowNull: false,
        },

        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "user",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "product",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "product_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
