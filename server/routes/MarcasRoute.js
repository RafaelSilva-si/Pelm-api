const express = require('express');
const router = express.Router();

const marcaService = require('../service/MarcasService');

router.get('/brands', (...args) => marcaService.getMarcas(...args));
router.post('/brands', (...args) => marcaService.insertMarca(...args));
router.put('/brands/:id', (...args) => marcaService.updateMarca(...args));
router.put('/brands/status/:id', (...args) => marcaService.updateStatusMarca(...args));
router.delete('/brands/:id', (...args) => marcaService.deleteMarca(...args));

module.exports = router;