// routes/inmuebles.js
const express = require('express');
const router = express.Router();
const inmueblesController = require('../controllers/inmueblesController');

router.get('/', inmueblesController.getAllInmuebles);
router.post('/', inmueblesController.createInmueble);
router.put('/:id', inmueblesController.updateInmueble);
router.delete('/:id', inmueblesController.deleteInmueble);

module.exports = router;