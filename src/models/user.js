const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  return user.init(sequelize, DataTypes);
};
/**
 * @openapi
 * components:
 *   schema:
 *     register:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: Ruben
 *         lastname:
 *           type: string
 *           example: Leon
 *         email:
 *           type: string
 *           example: ing.leon99@gmail.com
 *         phone:
 *           type: string
 *           example: 9999999999
 *         password:
 *           type: string
 *           example: 1234
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: ing.leon@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     loginResponse:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Ruben
 *         id:
 *           type: int
 *           example: 2
 *         email:
 *           type: string
 *           example: ing.leon99@gmail.com
 *         token:
 *           type: string
 *           example:
 */
class user extends Sequelize.Model {
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
        username: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: "user_email_key",
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        hooks: {
          beforeCreate: (user, options) => {
            const { password } = user;
            const hash = bcrypt.hashSync(password, 10);
            user.password = hash;
          },
        },
        sequelize,
        tableName: "user",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "user_email_key",
            unique: true,
            fields: [{ name: "email" }],
          },
          {
            name: "user_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
