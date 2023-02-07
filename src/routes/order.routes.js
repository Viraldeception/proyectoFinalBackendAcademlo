const { Router } = require("express");
const { createBuy } = require("../controllers/order.controller");

const router = Router();

router.post("/:id", createBuy);

module.exports = router;
