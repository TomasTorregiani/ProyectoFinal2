var express = require('express')
var router = express.Router()
var profesModel = require('../../models/profesModel')


router.get('/', async (req, res, next) => {
    var profes = await profesModel.getProfes()

    res.render('admin/profes', {
        layout: 'admin/layout',
        profes
    })
})
router.get('/agregarProfes', (req, res, next) => {
    res.render('admin/agregarProfes', {
        layout: 'admin/layout'
        });
    });

router.post('/agregarProfes', async function(req, res, next){
        try{
            if(req.body.Nombre != "" && req.body.Apellido != "" && req.body.Mail != "" && req.body.img != ""){
                await profesModel.addStaff(req.body)
                res.redirect('/admin/profes')
            } else {
                res.render('admin/agregarProfes', {
                    layout: 'admin/layout',
                    error: true,
                    message: 'Todos los campos son requeridos'
                })
            }
        } catch (error){
            console.log(error);
            res.render('admin/agregarProfes', {
                layout:'admin/layout',
                error: true,
                message: 'No se cargo la novedad'
            })
        }
    })

router.get('/eliminarProfe/:id', async (req, res, next) => {
    var id = req.params.id
    await profesModel.deleteProfe(id)
    res.redirect('/admin/profes')
})


module.exports = router;