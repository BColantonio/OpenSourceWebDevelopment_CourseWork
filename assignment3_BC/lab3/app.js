var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

var app = express();

var router = express.Router();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

hbs.registerHelper('error404',()=>{
  // generate random set of 20 to 50 div's with the text '404'
  var divNo = ()=>{
    return Math.random() * (50 - 20) + 20;
  }
  

  return createDivs(divNo())
//res.render(createDivs(divNo));
  // each one generated should have a random class of either 'still' 'rotate' or 'shrink'

  //this should generate animated '404's when the user tries to navigate to a page that does not exist
});

function createDivs(times){
  var ret = "";
  var classes = ["still", "rotate", "shrink"];
    for(let i=0; i<times; i++)
    {
      ret+=`<div id='myDIV' class=${classes[Math.floor(Math.random() * 2.9)]}>404</div>`
    }
  return ret;
}

// function classAssignment() {
//   var nom = Math.floor(Math.random() * 3) + 1  
//   var element = document.getElementById("myDIV");
//   var classes = "";
//   switch (nom) {
//     case 1:
//       classes = "still"
//     case 2: 
//       classes = "rotate"
//     case 3: 
//       classes = "shrink"
//   }
//   element.classList.add(classes);
// }

module.exports = app;
