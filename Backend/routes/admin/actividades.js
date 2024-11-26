var express = require('express')
var router = express.Router();
var actividadesModel = require('../../models/actividadesModel')

router.get('/', async (req, res, next) => {

    var actividades = await actividadesModel.getActividades()

    res.render('admin/actividades', {
        layout: 'admin/layout',
        actividades
    })
})

module.exports = router;