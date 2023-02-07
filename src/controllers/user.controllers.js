const UserServices = require("../services/user.services");

const getWithProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getProducts(id);
    res.json({ message: "users with products" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const userWithOrders = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.withOrders(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { getWithProducts, userWithOrders };
