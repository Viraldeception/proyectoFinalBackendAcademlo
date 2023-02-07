const { Router } = require("express");
const {
  addProduct,
  getProducts,
} = require("../controllers/product.controllers");

const router = Router();

router.post("/", addProduct);
router.get("/", getProducts);

module.exports = router;
