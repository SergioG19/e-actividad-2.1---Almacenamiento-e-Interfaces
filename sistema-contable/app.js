const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cuentasRoutes = require('./routes/cuentasRoutes')
const clientesRoutes = require('./routes/clientesRoutes');
const facturasRoutes = require('./routes/facturasRoutes');
const productosRoutes = require('./routes/productosRoutes');
const proveedoresRoutes = require('./routes/proveedoresRoutes');
const pedidosRoutes = require('./routes/pedidosRoutes');
const empleadosRoutes = require('./routes/empleadosRoutes');

const app = express();

// Configurar el motor de plantillas EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//conectar la base de datos MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/BaseSG', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a la base de datos establecida con éxito'))
  .catch(err => console.error('Error al conectar a la base de datos', err));

// Rutas
app.use('/cuentas', cuentasRoutes);
app.use('/clientes', clientesRoutes);
app.use('/facturas', facturasRoutes);
app.use('/productos', productosRoutes);
app.use('/proveedores', proveedoresRoutes);
app.use('/pedidos', pedidosRoutes);
app.use('/empleados', empleadosRoutes);
// Ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
