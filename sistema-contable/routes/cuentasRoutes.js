const express = require('express');
const router = express.Router();
const CuentasController = require('../controllers/cuentasController');
const cuentasController = new CuentasController(); // Crea una nueva instancia del controlador

router.post('/', (req, res) => {
  CuentasController.agregar(req, res);
});

router.get('/', (req, res) => {
  const cuentas = CuentasController.listar();
  res.json(cuentas);
});

router.put('/:id', (req, res) => {
  CuentasController.editar(req, res);
});

router.delete('/:id', (req, res) => {
  CuentasController.eliminar(req, res);
});

router.get('/vista', async (req, res) => {
  const cuentas = await CuentasController.listar();
  if (cuentas) {
    res.render('cuentas', { cuentas });
  } else {
    res.status(500).send('Error al listar las cuentas');
  }
});

module.exports = router;