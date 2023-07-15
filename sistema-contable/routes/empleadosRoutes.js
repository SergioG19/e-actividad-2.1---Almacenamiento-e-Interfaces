const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleadosController');

router.post('/', (req, res) => {
  empleadosController.agregar(req, res);
});

router.get('/', (req, res) => {
  empleadosController.listar(req, res);
});


router.get('/:id', (req, res) => {
  empleadosController.obtener(req, res);
});

router.put('/:id', (req, res) => {
  empleadosController.editar(req, res);
});

router.delete('/:id', (req, res) => {
  empleadosController.eliminar(req, res);
});

module.exports = router;