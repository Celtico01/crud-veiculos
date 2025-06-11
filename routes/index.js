const express = require('express');
const marcaCtrl = require('../controller/marcaController');
const veiculoCtrl = require('../controller/veiculoController');

const router = express.Router();

// Rotas de marcas
router.get('/marcas', marcaCtrl.getAll);
router.get('/marcas/:id', marcaCtrl.getById);
router.post('/marcas', marcaCtrl.create);
router.put('/marcas/:id', marcaCtrl.update);
router.delete('/marcas/:id', marcaCtrl.remove);

// Rotas de veículos
router.get('/veiculos', veiculoCtrl.getAll);
router.get('/veiculos/:id', veiculoCtrl.getById);
router.post('/veiculos', veiculoCtrl.create);
router.put('/veiculos/:id', veiculoCtrl.update);
router.delete('/veiculos/:id', veiculoCtrl.remove);

module.exports = router;