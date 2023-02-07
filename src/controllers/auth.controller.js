const AuthServices = require("../services/auth.services");
const transporter = require("../utils/mailers");
const CartServices = require("../services/cart.services");

const register = async (req, res) => {
  try {
    const user = req.body;
    const result = await AuthServices.register(user);
    if (result) {
      const user_id = result.id;
      const cartUser = { user_id };
      await CartServices.create(cartUser);
      res.status(201).json({ message: "user created" });
      await transporter.sendMail({
        to: result.email,
        from: "ing.leon99@gmail.com",
        subject: "Email confirmado",
        html: "<h1>Bienvenido a nuestra tienda de Academlo</h1> <p>Tienes que confirmar tu Email</p><p>Solo haz click en el siguiente <a href='#' target='new_blank'> enlace </a> </p>",
      });
    } else {
      res.status(400).json({ message: "something wrong" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({
        error: "Missing data",
        message: "Not email provided",
      });
    }
    if (!password) {
      return res.status(400).json({
        error: "Missing data",
        message: "Not password provided",
      });
    }
    const result = await AuthServices.login({ email, password });
    if (result.isValid) {
      const { username, id, email } = result.user;
      const userData = { username, id, email };
      const token = AuthServices.genToken(userData);
      userData.token = token;
      res.json(userData);
    } else {
      res.status(400).json("user not found");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { register, login };
