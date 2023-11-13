const express = require('express');
const router = express.Router();
const autoresController = require('../controllers/autoresController');

// Definir las rutas para Autores
router.get('/autores', autoresController.listarAutores);
// Más rutas aquí

module.exports = router;