const models = require("../models");

class OrderServices {
  static async create(id) {
    try {
      const cartUser = await models.cart.findOne({ where: { user_id: id } });
      const newOrder = { user_id: id, total_price: cartUser.total_price };
      const result = await models.order.create(newOrder);
      const productCart = await models.product_in_cart.findAll({
        where: { cart_id: cartUser.id },
      });
      productCart.forEach(async (arrayProd) => {
        const { product_id, quantity } = arrayProd;
        const product = await models.product.findOne({
          where: { id: arrayProd.product_id },
        });
        await models.product_in_order.create({
          product_id,
          quantity,
          order_id: result.id,
          price: product.price,
        });
        await models.product_in_cart.destroy({
          where: { cart_id: cartUser.id },
        });
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderServices;
