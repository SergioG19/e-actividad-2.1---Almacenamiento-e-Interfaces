const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  id: Number,
  nombre: String,
  precio: Number
});

const Producto = mongoose.model('Producto', ProductoSchema);

class ProductosController {
  static async agregar(req, res) {
    try {
      const nuevoProducto = new Producto(req.body);
      const resultado = await nuevoProducto.save();
      res.status(201).send(resultado);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async listar(req, res) {
    try {
      const productos = await Producto.find();
      res.send(productos);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async editar(req, res) {
    try {
      const producto = await Producto.findOne({ id: req.params.id });
      if (!producto) {
        return res.status(404).send();
      }

      if (req.body.nombre) {
        producto.nombre = req.body.nombre;
      }

      if (req.body.precio) {
        producto.precio = req.body.precio;
      }

      const resultado = await producto.save();
      res.send(resultado);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async eliminar(req, res) {
    try {
      const producto = await Producto.findOneAndDelete({ id: req.params.id });
      if (!producto) {
        return res.status(404).send();
      }
      res.send(producto);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = ProductosController;