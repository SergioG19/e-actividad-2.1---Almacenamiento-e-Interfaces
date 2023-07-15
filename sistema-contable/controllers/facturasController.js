const mongoose = require('mongoose');

const FacturaSchema = new mongoose.Schema({
  id: Number,
  cliente: String,
  fecha: Date,
  total: Number
});

const Factura = mongoose.model('Factura', FacturaSchema);

class FacturasController {
  static async agregar(req, res) {
    try {
      const nuevaFactura = new Factura(req.body);
      const resultado = await nuevaFactura.save();
      res.status(201).send(resultado);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async listar(req, res) {
    try {
      const facturas = await Factura.find();
      res.send(facturas);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async editar(req, res) {
    try {
      const factura = await Factura.findOne({ id: req.params.id });
      if (!factura) {
        return res.status(404).send();
      }

      if (req.body.cliente) {
        factura.cliente = req.body.cliente;
      }

      if (req.body.fecha) {
        factura.fecha = req.body.fecha;
      }

      if (req.body.total) {
        factura.total = req.body.total;
      }

      const resultado = await factura.save();
      res.send(resultado);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async eliminar(req, res) {
    try {
      const factura = await Factura.findOneAndDelete({ id: req.params.id });
      if (!factura) {
        return res.status(404).send();
      }
      res.send(factura);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = FacturasController;