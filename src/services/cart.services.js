const { cart } = require('../models');
const models = require('../models');

class CartServices {
  static async create(cartUser){
    try {
      const result = await models.cart.create(cartUser);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addProduct(newProduct){
    try {
      const result = await models.product_in_cart.create(newProduct);
      const product =await models.product.findOne({where:{id:result.product_id}});
      const car = await models.cart.findOne({where:{id:newProduct.cart_id}});
      console.log(car)
      await models.cart.update({total_price:car.total_price + (product.price*newProduct.quantity)},
      {where:{id:newProduct.cart_id}});
      await models.product.update({availableQty:product.availableQty - newProduct.quantity},{where:{id:product.id}})
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = CartServices;