const models = require("../models");
const { Op } = require("sequelize");

class ProductServices {
  static async add(product) {
    try {
      const result = await models.product.create(product);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async get() {
    try {
      const result = await models.product.findAll({
        where: { availableQty: { [Op.gt]: 0 } },
        include: {
          model: models.user,
          as: "user",
          attributes: ["username"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductServices;
