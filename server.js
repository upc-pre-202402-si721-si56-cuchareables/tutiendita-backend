const express = require('express');
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json());

app.use('/usuarios', require('./routes/usuarioRoutes'));
app.use('/tiendas', require('./routes/tiendaRoutes'));
app.use('/productos', require('./routes/productoRoutes'));
app.use('/ordenes', require('./routes/ordenRoutes'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});