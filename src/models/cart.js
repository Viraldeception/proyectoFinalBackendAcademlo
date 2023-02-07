const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return cart.init(sequelize, DataTypes);
};

class cart extends Sequelize.Model {
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
        total_price: {
          type: DataTypes.DOUBLE,
          allowNull: true,
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
        tableName: "cart",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "cart_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
