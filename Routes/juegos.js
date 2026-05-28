const express = require('express');
const router = express.Router();

const JuegosController = require('../Controllers/JuegosController');

router.get('/', JuegosController.index);
router.get('/crear', JuegosController.crear);
router.post('/guardar', JuegosController.guardar);

module.exports = router;
