var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/', urlencodedParser, (req, res)=>{
  //console.log(req.body.name);
  console.log("BOOF");
  console.log(res);
  res.render('results', {name:req.body.name, email:req.body.email, comments:req.body.comments});
  res.end;
});

module.exports = router;