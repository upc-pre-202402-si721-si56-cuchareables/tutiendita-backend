const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    password: String,
    direccion: String,
    telefono: String,
    rol: String,
});

module.exports = mongoose.model('Usuario', usuarioSchema);