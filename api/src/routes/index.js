const {Router} = require('express');
// import all routers;
const productRouter = require('./product.js');
const searchRouter = require('./search');
const categoryRouter = require('./category');
const {use} = require('./product.js');
const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/search', searchRouter);
router.use('/category', categoryRouter);

module.exports = router;
