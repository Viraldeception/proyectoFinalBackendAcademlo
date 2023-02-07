const OrderServices = require("../services/order.services");
const transporter = require("../utils/mailers");

const createBuy = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await OrderServices.create(id);

    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { createBuy };
