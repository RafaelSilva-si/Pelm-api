const express = require('express');
const router = express.Router();
const productsService = require('../service/ProductsService');


router.get('/products', (...args) => productsService.getProducts(...args));
router.get('/products/filter',(...args) => productsService.getProduct(...args));
router.post('/products/new',(...args) => productsService.insertProduct(...args));
router.put('/products/put',(...args) => productsService.updateProduct(...args));
router.delete('/products/delete',(...args) => productsService.deleteProduct(...args));

module.exports = router;