var express = require('express');
var router = express.Router();
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LAB 3-1' });
});

router.post('/result', function(req, res, next) {
  //console.log(req);
  res.render('result', { x: req.body.num });
});

hbs.registerHelper('opt',()=>{
  var val = [3,4,5,10,20];
  var ret = "<form action = 'result' method='POST'><br><select name='num'>";
  for(let i=0; i<val.length; i++)
  {
    ret+="<option name='value' value="+val[i]+">"+val[i]+"</option>";
  }
  ret+="</select><input type='submit' value='Submit'></form>"
  return ret;
});

hbs.registerHelper('grd',(x)=>{
  var y = x.data.root.x;
  var z = Number(y);
  var grid = `<table><tbody><tr>`;
  var test = 1;
  var counter = 0;;
  for(let i=0; i<=z; i++)
  {
    var color = ((1<<24)*Math.random()|0).toString(16);

    if (i == z)
    {
      if (counter == z && i == z){
        grid += `</tr></tbody></table>`;
        console.log(counter);
        console.log(z);
        return grid;
      }
      grid+=`</tr>`;
      counter++;
      i=0;
    }
    grid += `<td style="background-color:#${color};">${color}<br/><span style="color:#ffffff;">${color}</span></td>`
  }
});



module.exports = router;
