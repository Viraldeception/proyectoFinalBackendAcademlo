const { Router } = require("express");
const { addProductAtCart } = require("../controllers/cart.controllers");

const router = Router();

router.post("/:id", addProductAtCart);

module.exports = router;
