var express = require('express')
var router = express.Router()
var productsModel = require('../../models/productsModel')

// Ruta que obtiene y renderiza los productos
router.get('/', async (req, res, next) => {
    try {
        var products = await productsModel.getProducts(); // Obtiene los productos desde la base de datos
        res.render('admin/productos', {
            layout: "admin/layout",
            products // Pasa los productos a la vista
        });
    } catch (error) {
        console.error("Error al obtener productos:", error);
        next(error);
    }
})

module.exports = router;
