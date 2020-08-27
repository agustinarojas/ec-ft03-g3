const {Router} = require('express');
// import all routers;
const productRouter = require('./product.js');
const searchRouter = require('./search');
const categoryRouter = require('./category');
const userRouter = require('./user');
const orderRouter = require('./orders.js');
const {use} = require('./product.js');
const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/search', searchRouter);
router.use('/category', categoryRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);

module.exports = router;
