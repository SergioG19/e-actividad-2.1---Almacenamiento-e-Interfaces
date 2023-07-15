const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  id: Number,
  nombre: String,
  email: String
});

const Cliente = mongoose.model('Cliente', ClienteSchema);

class ClientesController {
  static async agregar(req, res) {
    try {
      const nuevoCliente = new Cliente(req.body);
      const resultado = await nuevoCliente.save();
      res.status(201).send(resultado);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async listar(req, res) {
    try {
      const clientes = await Cliente.find();
      res.send(clientes);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async editar(req, res) {
    try {
      const cliente = await Cliente.findOne({ id: req.params.id });
      if (!cliente) {
        return res.status(404).send();
      }

      if (req.body.nombre) {
        cliente.nombre = req.body.nombre;
      }

      if (req.body.email) {
        cliente.email = req.body.email;
      }

      const resultado = await cliente.save();
      res.send(resultado);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async eliminar(req, res) {
    try {
      const cliente = await Cliente.findOneAndDelete({ id: req.params.id });
      if (!cliente) {
        return res.status(404).send();
      }
      res.send(cliente);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = ClientesController;