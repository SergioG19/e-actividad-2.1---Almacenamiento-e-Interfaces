const express = require('express');
const router = express.Router();
const proveedoresController = require('../controllers/proveedoresController');

router.post('/', (req, res) => {
  proveedoresController.agregar(req, res);
});

router.get('/', (req, res) => {
  proveedoresController.listar(req, res);
});

router.get('/:id', (req, res) => {
  proveedoresController.obtener(req, res);
});

router.put('/:id', (req, res) => {
  proveedoresController.editar(req, res);
});

router.delete('/:id', (req, res) => {
  proveedoresController.eliminar(req, res);
});

module.exports = router;