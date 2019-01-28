var express = require('express');
var router = express.Router();
const app = express()
app.use(express.urlencoded())
/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('results', { title: 'Here are the results!' });
app.post('/submit', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const comments = req.body.comments
    //...
    res.end()
  })
module.exports = router;
//});
