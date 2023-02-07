const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465", //Para Gmail el 465
  secure: true, //HHTPS
  auth: {
    user: "ing.leon99@gmail.com",
    pass: process.env.G_PASSWORD,
  },
});

module.exports = transporter;
