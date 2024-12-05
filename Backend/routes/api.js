var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel')
var profesModel = require('../models/profesModel')
var actividadesModel = require('../models/actividadesModel')
var productsModel = require('../models/productsModel')
var cloudinary = require('cloudinary').v2
var nodemailer = require('nodemailer')

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
    try {
        var profes = await profesModel.getProfes();
        res.json(profes);
    } catch (error) {
        console.error('Error en /profes:', error);
        res.status(500).json({ error: 'Hubo un problema al obtener los datos' });
    }
});


router.get('/actividades', async (req, res, next) => {
    var actividades = await actividadesModel.getActividades()
    res.json(actividades)
})

router.get('/products', async (req, res, next) => {
    var products = await productsModel.getProducts()
    res.json(products)
})

//ruta para envio de mails
router.post('/contacto', async(req, res, next) => {
    const mail = {
        to: 'tomitorre91@gmail.com',
        subject: 'Contacto Web',
        html: `${req.body.nombre} se contacto a traves de la web y quiere mas informacion a este correo: ${req.body.email} <br> Ademas, hizo el siguiente comentario ${req.body.mensaje} <br> Su tel es ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })
    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje Enviado'
    })
}) 


module.exports = router;