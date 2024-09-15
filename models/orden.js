const mongoose = require('mongoose');

const ordenSchema = new mongoose.Schema({
    usuarioId: mongoose.Schema.Types.ObjectId,
    tiendaId: mongoose.Schema.Types.ObjectId,
    productos: [
        {
            productoId: mongoose.Schema.Types.ObjectId,
            cantidad: Number,
            precio: Number,
        },
    ],
    total: Number,
    estado: String,
    fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Orden', ordenSchema);