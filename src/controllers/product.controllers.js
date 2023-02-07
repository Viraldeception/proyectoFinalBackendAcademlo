const ProductServices = require("../services/product.services");

const addProduct = async (req, res) => {
  try {
    const product = req.body;
    const result = await ProductServices.add(product);
    res.status(201).json({ message: "product add" });
  } catch (error) {
    res.status(400).json({ message: "something wrong" });
  }
};
const getProducts = async (req, res) => {
  try {
    const result = await ProductServices.get();
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: "something wrong" });
  }
};

module.exports = { addProduct, getProducts };
