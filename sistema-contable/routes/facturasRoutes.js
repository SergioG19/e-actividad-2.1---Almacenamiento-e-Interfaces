const express = require('express');
const router = express.Router();
const facturasController = require('../controllers/facturasController');

router.get('/vista', (req, res) => {
    res.render('facturas');
});

router.post('/', (req, res) => {
  facturasController.agregar(req, res);
});

router.get('/', (req, res) => {
  const facturas = facturasController.listar();
  res.json(facturas);
});

router.put('/:id', (req, res) => {
  facturasController.editar(req, res);
});

router.delete('/:id', (req, res) => {
  facturasController.eliminar(req, res);
});

module.exports = router;