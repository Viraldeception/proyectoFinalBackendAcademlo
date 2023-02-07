const { Router } = require("express");
const {
  getWithProducts,
  userWithOrders,
} = require("../controllers/user.controllers");

const router = Router();

router.get("/:id", getWithProducts);
router.get("/:id/order", userWithOrders);

module.exports = router;
