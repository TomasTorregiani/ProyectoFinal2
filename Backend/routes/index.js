var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/admin/login');
});


/* router.get('/', function(req, res, next){
  res.render('index', {
    layout: 'layout',
    title: 'Flowing'
  })
}) */

module.exports = router;