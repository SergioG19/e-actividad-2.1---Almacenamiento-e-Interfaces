const mongoose = require('mongoose');

const CuentaSchema = new mongoose.Schema({
  id: Number,
  nombre: String,
  tipo: String
});

const Cuenta = mongoose.model('Cuenta', CuentaSchema);

class CuentasController {
  static async agregar(req, res) {
    try {
      const nuevaCuenta = new Cuenta(req.body);
      const resultado = await nuevaCuenta.save();
      res.status(201).send(resultado);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async listar() {
    try {
      const cuentas = await Cuenta.find().select('_id id nombre tipo');
      return cuentas;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async editar(req, res) {
    try {
      const cuenta = await Cuenta.findOne({ _id: req.params.id });
      if (!cuenta) {
        return res.status(404).send();
      }

      if (req.body.nombre) {
        cuenta.nombre = req.body.nombre;
      }

      if (req.body.tipo) {
        cuenta.tipo = req.body.tipo;
      }

      const resultado = await cuenta.save();
      res.send(resultado);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async eliminar(req, res) {
    try {
      const cuenta = await Cuenta.findOneAndDelete({ _id: req.params.id });
      if (!cuenta) {
        return res.status(404).send();
      }
      res.send(cuenta);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = CuentasController;