const Tienda = require('../models/tienda');

exports.getTiendas = async (req, res) => {
    const tiendas = await Tienda.find();
    res.json(tiendas);
};

exports.createTienda = async (req, res) => {
    const tienda = new Tienda(req.body);
    await tienda.save();
    res.json(tienda);
};

exports.updateTienda = async (req, res) => {
    const tienda = await Tienda.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(tienda);
};

exports.deleteTienda = async (req, res) => {
    await Tienda.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tienda eliminada' });
};