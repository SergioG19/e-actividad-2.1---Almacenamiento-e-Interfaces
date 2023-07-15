const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.post('/', (req, res) => {
  productosController.agregar(req, res);
});

router.get('/', (req, res) => {
  productosController.listar(req, res);
});

router.put('/:id', (req, res) => {
  productosController.editar(req, res);
});

router.delete('/:id', (req, res) => {
  productosController.eliminar(req, res);
});

module.exports = router;