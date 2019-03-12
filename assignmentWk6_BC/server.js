console.log('here')
require('./Model/db');
const express = require('express');
const employeeController = require('./Controller/employeeController')
const bodyparser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/View/'))
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/View/layouts/' }));
app.set('view engine', 'hbs');

 
// app.get('/', function (req, res) {
//     res.render('home');
// });
 
app.listen(3000);

app.use('/employee', employeeController)