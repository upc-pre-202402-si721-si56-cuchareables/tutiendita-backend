const Usuario = require('../models/usuario');

exports.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

exports.createUsuario = async (req, res) => {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json(usuario);
};

exports.updateUsuario = async (req, res) => {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(usuario);
};

exports.deleteUsuario = async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ message: 'Usuario eliminado' });
};