var express = require('express');
var router = express.Router();
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

hbs.registerHelper('opt',()=>{
  var val = [3,4,5,10,20];
  var ret = "<select>";
  for(let i=0; i<val.length; i++)
  {
    ret+="<option value="+val[i]+">"+val[i]+"</option>";
  }
  ret+="</select>"
  return ret;
});

module.exports = router;
