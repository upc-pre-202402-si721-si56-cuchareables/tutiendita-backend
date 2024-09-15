const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    stock: Number,
    tiendaId: mongoose.Schema.Types.ObjectId,
    categoria: String,
});

module.exports = mongoose.model('Producto', productoSchema);