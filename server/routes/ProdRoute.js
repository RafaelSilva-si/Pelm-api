const express = require('express');
const router = express.Router();
const productsService = require('../service/ProductsService');


router.get('/products', (...args) => productsService.getProducts(...args));
router.post('/products/new',(...args) => productsService.insertProduct(...args));
router.put('/products/:id',(...args) => productsService.updateProduct(...args));
router.delete('/products/:id',(...args) => productsService.deleteProduct(...args));
router.put('/products/status/:id', (...args) => productsService.updateStatusProduct(...args))
module.exports = router;