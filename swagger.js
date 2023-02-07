const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const options = {
  apis: [
    "./src/routes/auth.routes.js",
    "./src/models/user.js",
    "./src/routes/product.routes.js",
    "./src/models/product.js",
    "./src/routes/user.routes.js",
    "./src/routes/order.routes.js",
    "./src/models/order.js",
    "./src/routes/cart.routes.js",
    "./src/models/product_in_cart.js",
    "./src/routes/order.routes.js",
  ],
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-commerce Academlo",
      version: "0.0.9",
      description: "API servicio de E-commerce- Ruben Leon",
    },
  },
};

// Vamos a generar una especificacion en Json para nuestra documentación
const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  // generar la ruta donde se mostrara la documentacion
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader({ "content-Type": "aplication/json" });
    res.send(swaggerSpec);
  });

  console.log(
    `La documentación está disponible en ${process.env.URL}:${port}/api/v1/docs`
  );
};

module.exports = swaggerDocs;
