const express = require('express');
const router = express.Router();
const fornService = require('../service/FornService');

router.get('/forn', (...args) => fornService.getForn(...args));
router.post('/forn/add', (...args) => fornService.insertForn(...args));
router.put(`/forn/:id`, (...args) => fornService.updateForn(...args));
router.put('/forn/status/:id', (...args) => fornService.updateStatus(...args));
router.delete('/forn/:id', (...args) => fornService.deleteForn(...args));

module.exports = router;
