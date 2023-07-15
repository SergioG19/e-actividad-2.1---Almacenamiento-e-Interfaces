const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  id: Number,
  clienteId: Number,
  productos: [{
    productoId: Number,
    cantidad: Number,
  }],
  total: Number,
  fecha: Date,
});

const Pedido = mongoose.model('Pedido', PedidoSchema);

class PedidosController {
  static async agregar(req, res) {
    try {
      const nuevoPedido = new Pedido(req.body);
      const resultado = await nuevoPedido.save();
      res.status(201).send(resultado);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async listar(req, res) {
    try {
      const pedidos = await Pedido.find();
      res.send(pedidos);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async obtener(req, res) {
    try {
      const pedido = await Pedido.findById(req.params.id);
      if (!pedido) {
        return res.status(404).send();
      }
      res.send(pedido);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async editar(req, res) {
    try {
      const pedido = await Pedido.findById(req.params.id);
      if (!pedido) {
        return res.status(404).send();
      }

      if (req.body.id) {
        pedido.id = req.body.id;
      }

      if (req.body.clienteId) {
        pedido.clienteId = req.body.clienteId;
      }

      if (req.body.productos) {
        pedido.productos = req.body.productos;
      }

      if (req.body.total) {
        pedido.total = req.body.total;
      }

      if (req.body.fecha) {
        pedido.fecha = req.body.fecha;
      }

      const resultado = await pedido.save();
      res.send(resultado);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async eliminar(req, res) {
    try {
      const pedido = await Pedido.findByIdAndDelete(req.params.id);
      if (!pedido) {
        return res.status(404).send();
      }
      res.send(pedido);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = PedidosController;