const Producto = require('../models/producto');

exports.getProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
};

exports.createProducto = async (req, res) => {
    const producto = new Producto(req.body);
    await producto.save();
    res.json(producto);
};

exports.updateProducto = async (req, res) => {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(producto);
};

exports.deleteProducto = async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ message: 'Producto eliminado' });
};