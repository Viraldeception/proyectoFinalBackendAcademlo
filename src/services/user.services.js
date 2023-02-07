
const models = require('../models');

class UserServices {
  static async getProducts (id){
    try {
      const result = await models.user.findOne({
        where:{id},
        include:{
          model: models.cart,
          as:"carts",
            include:{
            model: models.product_in_cart,
            as:"product_in_carts"
            }
          },
        
      });
      return result;
    } catch (error) {
      throw error;
    }
  };
  static async withOrders(id) {
    try {
      const result = await models.user.findAll({
        where:{id},
        include:{
          model: models.order,
          as:"orders"
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = UserServices;
