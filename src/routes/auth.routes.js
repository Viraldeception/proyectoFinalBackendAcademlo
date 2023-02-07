const { Router } = require("express");
const { register, login } = require("../controllers/auth.controller");

const router = Router();
/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: Create a new user into application
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Required fields to create a new user
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user created
 */

//registro y login
//router.METHOD //GET, POST, PUT, DELETE
router.post("/register", register);
router.post("/login", login);

module.exports = router;
