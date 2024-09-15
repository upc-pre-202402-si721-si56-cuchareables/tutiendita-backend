const Orden = require('../models/orden');

exports.getOrdenes = async (req, res) => {
    const ordenes = await Orden.find();
    res.json(ordenes);
};

exports.createOrden = async (req, res) => {
    const orden = new Orden(req.body);
    await orden.save();
    res.json(orden);
};

exports.updateOrden = async (req, res) => {
    const orden = await Orden.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(orden);
};

exports.deleteOrden = async (req, res) => {
    await Orden.findByIdAndDelete(req.params.id);
    res.json({ message: 'Orden eliminada' });
};