const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

router.post('/', (req, res) => {
  pedidosController.agregar(req, res);
});

router.get('/', (req, res) => {
  pedidosController.listar(req, res);
});

router.get('/:id', (req, res) => {
  pedidosController.obtener(req, res);
});

router.put('/:id', (req, res) => {
  pedidosController.editar(req, res);
});

router.delete('/:id', (req, res) => {
  pedidosController.eliminar(req, res);
});

module.exports = router;