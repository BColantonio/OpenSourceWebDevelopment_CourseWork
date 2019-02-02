var express = require('express');
var router = express.Router();
var fs = require('fileSystem');
var image=fs.image('../public/images/punisher.jpg')
/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('about', { title: 'about' });
});

module.exports = router;
