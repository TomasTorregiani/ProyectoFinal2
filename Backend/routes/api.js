var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel')
var profesModel = require('../models/profesModel')
var actividadesModel = require('../models/actividadesModel')
var productsModel = require('../models/productsModel')
var cloudinary = require('cloudinary').v2

router.get('/novedades', async (req, res, next) => {
    var novedades = await novedadesModel.getNovedades()
    novedades = novedades.map(novedades => {
        if(novedades.img_id){
            const imagen = cloudinary.url(novedades.img_id, {
                width: 700,
                height: 200,
                crop:'fill'
            })
            return {
                ...novedades,
                imagen
            }
        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    })
    res.json(novedades)
})

router.get('/profes', async (req, res, next) => {
    var profes = await profesModel.getProfes()
    res.json(profes)
})

router.get('/actividades', async (req, res, next) => {
    var actividades = await actividadesModel.getActividades()
    res.json(actividades)
})

router.get('/products', async (req, res, next) => {
    var products = await productsModel.getProducts()
    res.json(products)
})


module.exports = router;