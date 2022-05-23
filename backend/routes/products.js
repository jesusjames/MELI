const { Router } = require('express');
const { getProducts, getProduct } = require('../controllers/products');

const router = Router();

router.get('/', getProducts);

router.get('/:id', getProduct);

module.exports = router;
