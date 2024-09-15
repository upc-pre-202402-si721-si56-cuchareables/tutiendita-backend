const express = require('express');
const router = express.Router();
const tiendaController = require('../controllers/tiendaController');

router.get('/', tiendaController.getTiendas);
router.post('/', tiendaController.createTienda);
router.put('/:id', tiendaController.updateTienda);
router.delete('/:id', tiendaController.deleteTienda);

module.exports = router;