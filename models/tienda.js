const mongoose = require('mongoose');

const tiendaSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    usuarioId: mongoose.Schema.Types.ObjectId,
    categoria: String,
    direccion: String,
    telefono: String,
});

module.exports = mongoose.model('Tienda', tiendaSchema);