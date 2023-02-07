const authRoutes=require('./auth.routes');
const productRoutes = require('./product.routes');
const cartRoutes = require('./cart.routes');
const userRoutes = require ('./user.routes');
const orderRoutes = require('./order.routes');
const authMiddleware = require('../middlewares/auth.middlewares');


const routerApi = (app) =>{
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/product', authMiddleware,productRoutes);
  app.use('/api/v1/cart', authMiddleware,cartRoutes);
  app.use('/api/v1/user',authMiddleware, userRoutes);
  app.use('/api/v1/order', authMiddleware,orderRoutes);
  
};

module.exports = routerApi;