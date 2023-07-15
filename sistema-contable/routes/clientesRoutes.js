const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.post('/', (req, res) => {
  clientesController.agregar(req, res);
});

router.get('/', (req, res) => {
  clientesController.listar(req, res);
});

router.put('/:id', (req, res) => {
  clientesController.editar(req, res);
});

router.delete('/:id', (req, res) => {
  clientesController.eliminar(req, res);
});

module.exports = router;